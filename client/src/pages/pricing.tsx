import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, CreditCard, Smartphone } from "lucide-react";
// import SeoRoiCalculator from "@/components/calculators/seo-roi-calculator"; // Hidden for initial release

export default function Pricing() {
  useEffect(() => {
    document.title = "Pricing - Brandforce.ai | Transparent AI SEO Pricing";
  }, []);

  const plans = [
    {
      name: "Starter",
      price: "$599",
      period: "/month",
      description: "Perfect for small businesses getting started with AI SEO",
      features: [
        "25 keywords/month",
        "2 content pieces/month",
        "Bi-monthly technical fixes",
        "Monthly reporting",
        "Email support",
        "Basic AI insights"
      ],
      popular: false,
      cta: "Start Trial"
    },
    {
      name: "Growth",
      price: "$1,499",
      period: "/month",
      description: "Ideal for growing businesses ready to scale their SEO",
      features: [
        "100 keywords/month",
        "8 content pieces/month",
        "Weekly technical fixes",
        "Bi-weekly reporting",
        "Priority support",
        "Advanced AI analytics",
        "Competitor tracking",
        "Local SEO included"
      ],
      popular: true,
      cta: "Start Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex SEO needs",
      features: [
        "Custom keyword limits",
        "Unlimited content",
        "Priority technical fixes",
        "Weekly reports + Slack integration",
        "Dedicated account manager",
        "Custom AI training",
        "API access",
        "White-label options"
      ],
      popular: false,
      cta: "Contact Us"
    }
  ];

  const addOns = [
    {
      name: "AI-Generated Content Packs",
      price: "$299/month",
      description: "Additional AI-written content pieces optimized for your keywords"
    },
    {
      name: "Link Building Campaigns",
      price: "$499/month",
      description: "Proactive outreach and relationship building for high-quality backlinks"
    },
    {
      name: "Dedicated SEO Manager",
      price: "$999/month",
      description: "Your own SEO expert for strategy calls and custom recommendations"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-manrope font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-secondary mb-8">
              Choose the plan that fits your business size and goals. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-elevated border-secondary/20 ${
                  plan.popular ? 'border-neon-green scale-105' : ''
                } hover:border-neon-green/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-manrope">{plan.name}</CardTitle>
                  <div className="my-4">
                    <span className="text-4xl font-manrope font-bold text-neon-green">
                      {plan.price}
                    </span>
                    <span className="text-secondary">{plan.period}</span>
                  </div>
                  <p className="text-sm text-secondary">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-neon-green mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact" className="w-full">
                    <Button 
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator - Hidden for initial release */}
      {/* <SeoRoiCalculator /> */}

      {/* Add-ons */}
      <section className="py-24 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-manrope font-bold mb-6">Add-ons</h2>
            <p className="text-xl text-secondary">
              Enhance your SEO package with these additional services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="bg-midnight border-secondary/20 hover:border-neon-green/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-manrope">{addon.name}</CardTitle>
                  <div className="text-2xl font-manrope font-bold text-neon-green">
                    {addon.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-secondary">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-manrope font-bold mb-6">Why Choose Brandforce</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-manrope font-bold mb-2">30-Day Guarantee</h3>
              <p className="text-secondary text-sm">
                Not satisfied? Get a full refund within 30 days, no questions asked.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-manrope font-bold mb-2">Flexible Payment</h3>
              <p className="text-secondary text-sm">
                Pay monthly or annually. We accept all major credit cards and PayPal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-manrope font-bold mb-2">24/7 Support</h3>
              <p className="text-secondary text-sm">
                Our team is always available to help you succeed with your SEO goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-manrope font-bold mb-6">
              Ready to Start Your SEO Journey?
            </h2>
            <p className="text-xl text-secondary mb-8">
              Get started with a free consultation to find the perfect plan for your business.
            </p>
            <Button size="lg" className="bg-neon-green text-midnight hover:bg-neon-green/90">
              <Link href="/contact">Book Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
