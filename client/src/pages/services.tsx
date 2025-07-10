import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Settings, FileText, Link as LinkIcon, MapPin, Brain, Target, BarChart3, Calendar } from "lucide-react";

export default function Services() {
  useEffect(() => {
    document.title = "Services - Brandforce.ai | AI-Powered SEO Solutions";
  }, []);

  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "AI-Powered Keyword Research",
      description: "We use AI to identify untapped, high-intent keywords in minutes.",
      features: ["Competitor gap analysis", "Search intent mapping", "Long-tail discovery", "Seasonal trend analysis"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Technical SEO with Automation",
      description: "Fix crawl errors, speed issues, and site structure — at scale.",
      features: ["Site speed optimization", "Mobile-first indexing", "Schema markup", "Core Web Vitals"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "AI-Enhanced Content Optimization",
      description: "Semantic tuning and NLP-informed rewrites to beat your competitors.",
      features: ["Content scoring", "Readability optimization", "Semantic keywords", "E-A-T improvement"]
    },
    {
      icon: <LinkIcon className="h-8 w-8" />,
      title: "Link Building Intelligence",
      description: "AI scans authority domains; our team closes the deals.",
      features: ["Domain authority analysis", "Outreach automation", "Relationship building", "Quality monitoring"]
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Local SEO + Map Pack Ranking",
      description: "Geo-targeted strategies driven by AI data + NAP consistency.",
      features: ["Google My Business optimization", "Local citations", "Review management", "Geo-targeting"]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Strategy Development",
      description: "Custom AI models trained on your industry data for maximum impact.",
      features: ["Industry-specific training", "Custom algorithms", "Predictive analytics", "Performance modeling"]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Audit",
      description: "Comprehensive AI analysis of your current SEO performance"
    },
    {
      number: "02",
      title: "Strategy",
      description: "Custom roadmap based on AI insights and human expertise"
    },
    {
      number: "03",
      title: "Execution",
      description: "Automated implementation with human quality assurance"
    },
    {
      number: "04",
      title: "Reporting",
      description: "Real-time dashboards with actionable insights"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-manrope font-bold mb-6">
              Smarter SEO Starts Here
            </h1>
            <p className="text-xl text-secondary mb-8">
              Our hybrid model delivers efficient, ROI-driven campaigns powered by AI + humans.
            </p>
            <div className="relative">
              <div className="w-32 h-32 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto">
                <Brain className="h-16 w-16 text-neon-green" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">Core Offerings</h2>
            <p className="text-xl text-secondary">
              Comprehensive SEO solutions that scale with your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-elevated border-secondary/20 hover:border-neon-green/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-neon-green">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-manrope">{service.title}</CardTitle>
                  <CardDescription className="text-secondary">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-secondary">
                        <div className="w-2 h-2 bg-neon-green rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
              Our Process: Simple, Scalable, Smart
            </h2>
            <p className="text-xl text-secondary">
              From audit to results in four streamlined steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-neon-green font-manrope font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-xl font-manrope font-bold mb-2">{step.title}</h3>
                <p className="text-secondary text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-manrope font-bold mb-6">
              Ready to Transform Your SEO?
            </h2>
            <p className="text-xl text-secondary mb-8">
              Book a strategy call with our SEO experts to discuss your specific needs.
            </p>
            <Button size="lg" className="bg-neon-green text-midnight hover:bg-neon-green/90">
              <Calendar className="mr-2 h-5 w-5" />
              <Link href="/contact">Talk to an SEO Strategist</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
