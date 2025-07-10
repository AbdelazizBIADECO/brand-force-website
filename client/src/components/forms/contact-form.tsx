import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { insertBrandforceContact, type BrandforceContactData } from "@/lib/api";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address")
    .toLowerCase(),
  website: z.string()
    .optional()
    .refine((url) => {
      if (!url || url.trim() === '') return true;
      try {
        const parsedUrl = new URL(url);
        return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
      } catch {
        return false;
      }
    }, "Please enter a valid website URL"),
  message: z.string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Insert into brandforce_contact table
      await insertBrandforceContact({
        name: data.name,
        email: data.email,
        website: data.website || undefined,
        message: data.message
      });

      setIsSubmitted(true);
      reset();
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

    } catch (error: any) {
      console.error('Contact form submission error:', error);
      
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-elevated rounded-2xl p-8 card-glow text-center">
        <div className="text-neon-green text-4xl mb-4">✓</div>
        <h3 className="text-xl font-manrope font-bold mb-2">Message Sent!</h3>
        <p className="text-secondary mb-4">
          Thanks for reaching out. We'll get back to you within 24 hours.
        </p>
        <p className="text-sm text-secondary">
          Check your email for confirmation.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-elevated rounded-2xl p-8 card-glow">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium mb-2">
              Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              className="bg-midnight border-secondary/30 focus:border-neon-green"
              disabled={isSubmitting}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="bg-midnight border-secondary/30 focus:border-neon-green"
              disabled={isSubmitting}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="website" className="block text-sm font-medium mb-2">
            Website (optional)
          </Label>
          <Input
            id="website"
            type="url"
            placeholder="https://yourwebsite.com"
            className="bg-midnight border-secondary/30 focus:border-neon-green"
            disabled={isSubmitting}
            {...register("website")}
          />
          {errors.website && (
            <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message" className="block text-sm font-medium mb-2">
            Message *
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us about your SEO goals and challenges..."
            className="bg-midnight border-secondary/30 focus:border-neon-green min-h-32"
            disabled={isSubmitting}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
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
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
}
