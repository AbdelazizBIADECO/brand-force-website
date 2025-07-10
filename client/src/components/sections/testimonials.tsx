import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">What Our Clients Say</h2>
        </div>
        
        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-elevated rounded-2xl p-8 md:p-12 text-center card-glow">
            <div className="mb-8">
              <Quote className="text-neon-green text-3xl mb-6 mx-auto" />
              <p className="text-xl md:text-2xl text-secondary leading-relaxed mb-6">
                "Brandforce.ai got us ranking in weeks, not quarters. Their AI-powered approach found keyword opportunities we never knew existed."
              </p>
            </div>
            
            <div className="text-center">
              <div className="font-manrope font-bold">Sarah K.</div>
              <div className="text-secondary">SaaS Founder</div>
            </div>
          </div>
          
          {/* Slider Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            <div className="w-3 h-3 bg-neon-green rounded-full"></div>
            <div className="w-3 h-3 bg-secondary rounded-full"></div>
            <div className="w-3 h-3 bg-secondary rounded-full"></div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green/10">
            <Link href="/case-studies">See Results →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
