import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Search, Shield, Clock, Users } from "lucide-react";

export default function Hero() {
  const phrases = [
    "AI-Powered SEO.",
    "Smart SEO Solutions.",
    "Advanced SEO Engine.",
    "Intelligent SEO."
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [animatedText, setAnimatedText] = useState(phrases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
      setAnimatedText(phrases[(currentPhraseIndex + 1) % phrases.length]);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentPhraseIndex, phrases]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-glow absolute inset-0"></div>
      
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-neon-green/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-neon-green/20 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-neon-green/20 rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Headline */}
          <h1 className="text-5xl md:text-7xl font-manrope font-bold mb-6 leading-tight">
            <span className="gradient-text">
              {animatedText}
            </span>
            <br />
            <span className="text-white">Human-Level Results.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            We fuse artificial intelligence with top-tier SEO experts to deliver unmatched search performance — fast, affordable, scalable.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="transition-all transform hover:scale-105"
              >
                <Search className="mr-2 h-5 w-5" />
                Get Your Free AI SEO Audit
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                size="lg" 
                variant="outline"
              >
                Learn More About Our Services
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-secondary">
            <div className="flex items-center space-x-2">
              <Shield className="text-neon-green h-5 w-5" />
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-neon-green h-5 w-5" />
              <span>Results in 90 Days</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="text-neon-green h-5 w-5" />
              <span>500+ Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
