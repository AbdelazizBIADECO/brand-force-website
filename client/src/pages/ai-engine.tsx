import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Brain, Zap, Target, FileText, CheckCircle, XCircle } from "lucide-react";

export default function AIEngine() {
  useEffect(() => {
    document.title = "AI Engine - Brandforce.ai | Proprietary SEO Technology";
  }, []);

  const integrations = [
    "GPT-4", "SEMrush", "Google Search Console", "Ahrefs", "SurferSEO", "Screaming Frog"
  ];

  const comparisonData = [
    { feature: "Real-time Audit", brandforce: true, traditional: false },
    { feature: "Predictive Keyword Mapping", brandforce: true, traditional: false },
    { feature: "Human QA", brandforce: true, traditional: true },
    { feature: "Time to Results", brandforce: "Weeks", traditional: "Months" },
    { feature: "Scalability", brandforce: "Unlimited", traditional: "Limited" },
    { feature: "Cost Efficiency", brandforce: "High", traditional: "Low" }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-manrope font-bold mb-6">
              Meet the Engine Behind Brandforce
            </h1>
            <p className="text-xl text-secondary mb-8">
              Our proprietary AI combines GPT-based analysis with SEO platforms for real-time insights.
            </p>
            <div className="relative">
              <div className="flex justify-center items-center space-x-4">
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center animate-pulse">
                  <Brain className="h-8 w-8 text-neon-green" />
                </div>
                <div className="w-8 h-0.5 bg-neon-green animate-pulse"></div>
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center animate-pulse">
                  <Zap className="h-8 w-8 text-neon-green" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
              AI That Thinks Like a Strategist
            </h2>
            <p className="text-xl text-secondary">
              Three-step process that combines machine learning with human insight
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-elevated border-secondary/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-neon-green" />
                </div>
                <CardTitle className="text-xl font-manrope">Analyze</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  AI scans your website, competitors, and market data to identify opportunities and threats.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-neon-green" />
                </div>
                <CardTitle className="text-xl font-manrope">Prioritize</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Machine learning algorithms rank opportunities by impact and effort, creating optimal action plans.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elevated border-secondary/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-neon-green" />
                </div>
                <CardTitle className="text-xl font-manrope">Execute</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Human experts review AI recommendations and execute strategies with precision and creativity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
              Plays Nice With Your Stack
            </h2>
            <p className="text-xl text-secondary mb-8">
              No new logins needed — we connect directly to your existing tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-midnight rounded-lg p-6 text-center hover:bg-neon-green/10 transition-all duration-300">
                <div className="text-lg font-manrope font-bold">{integration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI vs Traditional Comparison */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
              AI vs Traditional SEO
            </h2>
            <p className="text-xl text-secondary">
              See how our AI-powered approach compares to traditional methods
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Table className="bg-elevated rounded-lg">
              <TableHeader>
                <TableRow className="border-secondary/20">
                  <TableHead className="font-manrope font-bold text-white">Feature</TableHead>
                  <TableHead className="font-manrope font-bold text-neon-green text-center">Brandforce AI</TableHead>
                  <TableHead className="font-manrope font-bold text-secondary text-center">Traditional SEO</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className="border-secondary/20">
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell className="text-center">
                      {typeof row.brandforce === 'boolean' ? (
                        row.brandforce ? (
                          <CheckCircle className="h-5 w-5 text-neon-green mx-auto" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-neon-green font-medium">{row.brandforce}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {typeof row.traditional === 'boolean' ? (
                        row.traditional ? (
                          <CheckCircle className="h-5 w-5 text-neon-green mx-auto" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-secondary font-medium">{row.traditional}</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Dashboard Mockup */}
      <section className="py-24 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
              AI-Powered Dashboard
            </h2>
            <p className="text-xl text-secondary">
              Real-time insights and recommendations at your fingertips
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-midnight rounded-2xl p-8 card-glow">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600" 
                alt="AI Dashboard Mockup" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-manrope font-bold mb-6">
              Experience the Power of AI
            </h2>
            <p className="text-xl text-secondary mb-8">
              Get a free preview of what our AI engine can do for your website.
            </p>
            <Button size="lg" className="bg-neon-green text-midnight hover:bg-neon-green/90">
              <Link href="/contact">Get a Free Preview Report</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
