import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Eye, Handshake } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About - Brandforce.ai | Our Mission and Team";
  }, []);

  const teamMembers = [
    {
      name: "Stuart",
      role: "Chief Product",
      avatar: "S",
      bio: "Former Google engineer with 10+ years in search algorithms and machine learning."
    },
    {
      name: "Abdou",
      role: "Head of AI",
      avatar: "A",
      bio: "PhD in Computer Science, specialized in NLP and semantic search technologies."
    },
    {
      name: "Chris",
      role: "SEO Lead",
      avatar: "C",
      bio: "15 years of SEO experience with Fortune 500 companies and startups alike."
    }
  ];

  const values = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Ethics",
      description: "We believe AI should augment human intelligence, not replace it. Our systems are designed with transparency and fairness in mind."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Speed",
      description: "In the fast-paced digital world, speed is everything. We deliver results quickly without compromising quality."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Transparency",
      description: "No black boxes. We explain exactly what we're doing and why it works for your business."
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Partnership",
      description: "We're not just a vendor—we're your strategic partner in achieving long-term SEO success."
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-manrope font-bold mb-6">
              Democratizing Elite SEO
            </h1>
            <p className="text-xl text-secondary mb-8">
              Using smart automation and human creativity to make world-class SEO accessible to every business.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-manrope font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-secondary mb-6">
                  We started Brandforce.ai because we saw too many businesses struggling with expensive, slow, and ineffective SEO services. Traditional agencies were charging premium prices for basic work, while advanced AI tools were too complex for most teams to use effectively.
                </p>
                <p className="text-lg text-secondary">
                  Our solution combines the best of both worlds: cutting-edge AI technology with human expertise, delivered at a fraction of the cost and time of traditional agencies.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-manrope font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-secondary">
              We're engineers, strategists, and creators obsessed with SEO excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-midnight border-secondary/20 text-center hover:border-neon-green/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-neon-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-midnight">{member.avatar}</span>
                  </div>
                  <CardTitle className="text-xl font-manrope">{member.name}</CardTitle>
                  <Badge variant="outline" className="border-neon-green text-neon-green w-fit mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-manrope font-bold mb-6">Our Values</h2>
            <p className="text-xl text-secondary">
              The principles that guide everything we do at Brandforce.ai
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-elevated border-secondary/20 text-center hover:border-neon-green/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-neon-green">{value.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-manrope">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Quote */}
      <section className="py-24 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-6xl text-neon-green mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-manrope font-bold mb-8">
              We succeed when our clients rank, convert, and grow.
            </blockquote>
            <p className="text-xl text-secondary">
              We're obsessed with ROI, not vanity metrics. Every strategy, every optimization, every recommendation is designed to drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-manrope font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-secondary mb-8">
              Interested in working with us? We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="outline" className="border-neon-green text-neon-green px-6 py-2 text-sm">
                Currently hiring: AI Engineers
              </Badge>
              <Badge variant="outline" className="border-neon-green text-neon-green px-6 py-2 text-sm">
                Currently hiring: SEO Specialists
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
