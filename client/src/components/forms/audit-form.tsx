import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { insertBrandforceEmail, checkEmailExists, type BrandforceEmailData } from "@/lib/api";
import { z } from "zod";

const auditFormSchema = z.object({
  website: z.string()
    .min(1, "Website URL is required")
    .url("Please enter a valid URL")
    .refine((url) => {
      try {
        const parsedUrl = new URL(url);
        return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
      } catch {
        return false;
      }
    }, "Please enter a valid website URL"),
  email: z.string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address")
    .toLowerCase()
});

type AuditFormData = z.infer<typeof auditFormSchema>;

export default function AuditForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditFormSchema),
  });

  const onSubmit = async (data: AuditFormData) => {
    setIsSubmitting(true);

    try {
      // Check if email already exists
      const emailExists = await checkEmailExists(data.email);
      
      if (emailExists) {
        setError("email", {
          type: "manual",
          message: "This email has already been used for an audit request"
        });
        toast({
          title: "Email Already Registered",
          description: "This email address has already been used for an audit request. Please use a different email or contact us directly.",
          variant: "destructive",
        });
        return;
      }

      // Insert into brandforce_emails table
      const result = await insertBrandforceEmail({
        email: data.email,
        website: data.website,
      });

      setIsSubmitted(true);
      reset();
      
      // Show success message with email confirmation status
      const emailStatus = result.emailSent 
        ? "Confirmation email sent!" 
        : "Request saved (email notification pending)";
      
      toast({
        title: "Success!",
        description: `Your audit request has been submitted. ${emailStatus} We'll send your results within 24 hours.`,
      });

    } catch (error: any) {
      console.error('Audit form submission error:', error);
      
      // Handle specific Supabase errors
      if (error.code === '23505') { // Unique constraint violation
        setError("email", {
          type: "manual",
          message: "This email has already been used for an audit request"
        });
        toast({
          title: "Email Already Registered",
          description: "This email address has already been used for an audit request.",
          variant: "destructive",
        });
      } else if (error.message?.includes('Invalid input')) {
        toast({
          title: "Invalid Input",
          description: "Please check your website URL and email address format.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your request. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-midnight rounded-2xl p-8 card-glow text-center">
        <div className="text-neon-green text-4xl mb-4">✓</div>
        <h3 className="text-xl font-manrope font-bold mb-2">Request Submitted!</h3>
        <p className="text-secondary mb-4">
          We'll analyze your website and send your personalized SEO audit within 24 hours.
        </p>
        <p className="text-sm text-secondary">
          Check your email for confirmation and next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-midnight rounded-2xl p-8 card-glow">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="website" className="block text-sm font-medium mb-2">
            Website URL
          </Label>
          <Input
            id="website"
            type="url"
            placeholder="https://yourdomain.com"
            className="bg-elevated border-secondary/30 focus:border-neon-green"
            disabled={isSubmitting}
            {...register("website")}
          />
          {errors.website && (
            <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="bg-elevated border-secondary/30 focus:border-neon-green"
            disabled={isSubmitting}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-neon-green text-midnight hover:bg-neon-green/90 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Send Me My Audit"
          )}
        </Button>
      </form>

      <div className="mt-6 text-sm text-secondary flex items-center">
        <Shield className="text-neon-green mr-2 h-4 w-4" />
        No spam. Unsubscribe anytime.
      </div>
    </div>
  );
}