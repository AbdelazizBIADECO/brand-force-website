import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Users, DollarSign } from "lucide-react";

export default function CaseStudies() {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("growth");

  useEffect(() => {
    document.title = "Case Studies - Brandforce.ai | Real Results from Real Clients";
  }, []);

  const caseStudies = [
    {
      id: 1,
      client: "TechStartup Pro",
      industry: "SaaS",
      problem: "Zero organic visibility for competitive keywords",
      solution: "AI keyword expansion + content optimization strategy",
      results: {
        traffic: "+485%",
        conversions: "+67%",
        keywords: "1,200+",
        timeframe: "6 months"
      },
      testimonial: "Brandforce transformed our SEO from zero to hero. We're now ranking for terms we never thought possible.",
      growth: 485,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 2,
      client: "Local Healthcare Group",
      industry: "Healthcare",
      problem: "Poor local search visibility across multiple locations",
      solution: "AI-powered local SEO + Google My Business optimization",
      results: {
        traffic: "+320%",
        conversions: "+89%",
        keywords: "850+",
        timeframe: "4 months"
      },
      testimonial: "Our patient bookings increased dramatically. The AI approach to local SEO is game-changing.",
      growth: 320,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 3,
      client: "E-commerce Fashion Brand",
      industry: "Ecommerce",
      problem: "High competition, low conversion rates from organic traffic",
      solution: "AI content optimization + technical SEO improvements",
      results: {
        traffic: "+240%",
        conversions: "+156%",
        keywords: "2,100+",
        timeframe: "8 months"
      },
      testimonial: "Not only did we get more traffic, but the quality improved dramatically. Our conversion rates doubled.",
      growth: 240,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 4,
      client: "Digital Marketing Agency",
      industry: "Agency",
      problem: "Needed to scale SEO services for multiple clients efficiently",
      solution: "White-label AI SEO platform + training program",
      results: {
        traffic: "+380%",
        conversions: "+92%",
        keywords: "5,000+",
        timeframe: "12 months"
      },
      testimonial: "Brandforce's AI platform allowed us to 10x our SEO capacity while maintaining quality results.",
      growth: 380,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ];

  const filters = ["All", "SaaS", "Healthcare", "Ecommerce", "Agency"];

  const filteredStudies = caseStudies
    .filter(study => filter === "All" || study.industry === filter)
    .sort((a, b) => {
      if (sortBy === "growth") return b.growth - a.growth;
      if (sortBy === "timeframe") return parseInt(a.results.timeframe) - parseInt(b.results.timeframe);
      return 0;
    });

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-manrope font-bold mb-6">
              Real Results, Real Clients
            </h1>
            <p className="text-xl text-secondary mb-8">
              See how we've transformed businesses across industries with AI-powered SEO
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-elevated border-b border-secondary/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filterOption) => (
              <Button
                key={filterOption}
                variant={filter === filterOption ? "default" : "outline"}
                onClick={() => setFilter(filterOption)}
                className={filter === filterOption ? "bg-neon-green text-midnight" : "border-secondary text-secondary hover:border-neon-green"}
              >
                {filterOption}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <Card key={study.id} className="bg-elevated border-secondary/20 hover:border-neon-green/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-manrope mb-2">{study.client}</CardTitle>
                      <Badge variant="outline" className="border-neon-green text-neon-green">
                        {study.industry}
                      </Badge>
                    </div>
                    <img 
                      src={study.image} 
                      alt={study.client}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-manrope font-bold text-red-400 mb-2">Problem</h4>
                    <p className="text-secondary text-sm">{study.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-manrope font-bold text-blue-400 mb-2">Solution</h4>
                    <p className="text-secondary text-sm">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-manrope font-bold text-neon-green mb-4">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-manrope font-bold text-neon-green">{study.results.traffic}</div>
                        <div className="text-xs text-secondary">Organic Traffic</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-manrope font-bold text-neon-green">{study.results.conversions}</div>
                        <div className="text-xs text-secondary">Conversions</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-manrope font-bold text-neon-green">{study.results.keywords}</div>
                        <div className="text-xs text-secondary">Keywords Ranking</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-manrope font-bold text-neon-green">{study.results.timeframe}</div>
                        <div className="text-xs text-secondary">Time Frame</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-midnight rounded-lg p-4">
                    <p className="text-secondary text-sm italic">"{study.testimonial}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-24 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-manrope font-bold mb-6">Aggregate Results</h2>
            <p className="text-xl text-secondary">Combined impact across all our clients</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-neon-green" />
              </div>
              <div className="text-3xl font-manrope font-bold gradient-text">350%</div>
              <div className="text-secondary">Average Traffic Growth</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-neon-green" />
              </div>
              <div className="text-3xl font-manrope font-bold gradient-text">91%</div>
              <div className="text-secondary">Average Conversion Increase</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-neon-green" />
              </div>
              <div className="text-3xl font-manrope font-bold gradient-text">500+</div>
              <div className="text-secondary">Successful Projects</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-neon-green" />
              </div>
              <div className="text-3xl font-manrope font-bold gradient-text">$50M+</div>
              <div className="text-secondary">Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
