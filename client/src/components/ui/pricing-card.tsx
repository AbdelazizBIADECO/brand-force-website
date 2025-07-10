import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  ctaLink?: string;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  cta,
  ctaLink = "/contact"
}: PricingCardProps) {
  return (
    <Card 
      className={`relative bg-elevated border-secondary/20 ${
        popular ? 'border-neon-green scale-105' : ''
      } hover:border-neon-green/50 transition-all duration-300`}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-neon-green text-midnight">
          Most Popular
        </Badge>
      )}
      
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-manrope">{name}</CardTitle>
        <div className="my-4">
          <span className="text-4xl font-manrope font-bold text-neon-green">
            {price}
          </span>
          <span className="text-secondary">{period}</span>
        </div>
        <p className="text-sm text-secondary">{description}</p>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm">
              <Check className="h-4 w-4 text-neon-green mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full ${
            popular 
              ? 'bg-neon-green text-midnight hover:bg-neon-green/90' 
              : 'border-neon-green text-neon-green hover:bg-neon-green/10'
          }`}
          variant={popular ? "default" : "outline"}
        >
          <Link href={ctaLink}>{cta}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
