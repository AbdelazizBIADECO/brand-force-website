import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

interface TestimonialSliderProps {
  testimonials?: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Brandforce.ai got us ranking in weeks — not quarters. Their AI-powered approach found keyword opportunities we never knew existed.",
    author: "Sarah K.",
    role: "SaaS Founder",
    company: "TechStartup Pro",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b494?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=128"
  },
  {
    id: 2,
    quote: "Our organic traffic increased 320% in just 90 days. The combination of AI insights and human expertise is game-changing.",
    author: "Michael R.",
    role: "Marketing Director",
    company: "GrowthCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=128"
  },
  {
    id: 3,
    quote: "Finally, an SEO solution that actually delivers on its promises. The AI recommendations are spot-on and the results speak for themselves.",
    author: "Jessica L.",
    role: "CEO",
    company: "Digital Solutions Inc",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=128"
  }
];

export default function TestimonialSlider({ 
  testimonials = defaultTestimonials, 
  autoPlay = true, 
  interval = 5000 
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-elevated rounded-2xl p-8 md:p-12 text-center card-glow relative">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-midnight border border-secondary/30 flex items-center justify-center hover:border-neon-green transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5 text-secondary hover:text-neon-green transition-colors" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-midnight border border-secondary/30 flex items-center justify-center hover:border-neon-green transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5 text-secondary hover:text-neon-green transition-colors" />
        </button>

        <div className="mb-8">
          <Quote className="text-neon-green text-3xl mb-6 mx-auto" />
          <p className="text-xl md:text-2xl text-secondary leading-relaxed mb-6">
            "{currentTestimonial.quote}"
          </p>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <img 
            src={currentTestimonial.image}
            alt={`${currentTestimonial.author} - ${currentTestimonial.role}`}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-left">
            <div className="font-manrope font-bold">{currentTestimonial.author}</div>
            <div className="text-secondary text-sm">
              {currentTestimonial.role} at {currentTestimonial.company}
            </div>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-neon-green' : 'bg-secondary hover:bg-neon-green/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Button variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green/10">
          <Link href="/case-studies">See All Results →</Link>
        </Button>
      </div>
    </div>
  );
}
