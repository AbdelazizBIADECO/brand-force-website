import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertNewsletterSubscriptionSchema, type InsertNewsletterSubscription } from "@shared/schema";

export default function NewsletterForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InsertNewsletterSubscription>({
    resolver: zodResolver(insertNewsletterSubscriptionSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertNewsletterSubscription) => {
      return await apiRequest("POST", "/api/newsletter", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      reset();
      toast({
        title: "Subscribed!",
        description: "You'll receive our monthly SEO trend report and exclusive insights.",
      });
    },
    onError: (error: any) => {
      const errorMessage = error.message?.includes("already subscribed") 
        ? "You're already subscribed to our newsletter!"
        : "Something went wrong. Please try again.";
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertNewsletterSubscription) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-4">
        <div className="text-neon-green text-3xl mb-2">✓</div>
        <h4 className="font-manrope font-bold mb-2">Welcome to RankFlow!</h4>
        <p className="text-secondary text-sm">
          Check your email for a confirmation link.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="newsletter-email" className="sr-only">
          Email Address
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary" />
          <Input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            className="pl-10 bg-background border-border focus:border-primary"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Subscribing..." : "Subscribe"}
      </Button>

      <div className="text-xs text-secondary flex items-center justify-center">
        <Shield className="h-3 w-3 mr-1" />
        No spam. Unsubscribe anytime.
      </div>
    </form>
  );
}
