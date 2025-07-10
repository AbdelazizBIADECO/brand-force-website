import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ui/service-card";
import { Search, Settings, FileText, Link as LinkIcon, MapPin } from "lucide-react";

export default function ServicesSnapshot() {
  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "AI Keyword Research",
      description: "Discover untapped opportunities"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Technical SEO",
      description: "Automated site optimization"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Content Optimization",
      description: "AI-enhanced content strategy"
    },
    {
      icon: <LinkIcon className="h-6 w-6" />,
      title: "Link Building",
      description: "Intelligent authority building"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Local SEO",
      description: "Dominate local search"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">What We Do</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Comprehensive SEO solutions powered by AI and perfected by human expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green/10">
            <Link href="/services">See All Services →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
