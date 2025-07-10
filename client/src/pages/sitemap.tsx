import { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Sitemap() {
  useEffect(() => {
    document.title = "Sitemap - Brandforce.ai";
  }, []);

  const siteStructure = [
    {
      category: "Main Pages",
      pages: [
        { name: "Home", url: "/", description: "AI-powered SEO services homepage" },
        { name: "About", url: "/about", description: "Our mission, team, and company values" },
        { name: "Services", url: "/services", description: "Complete SEO service offerings" },
        { name: "AI Engine", url: "/ai-engine", description: "Our AI-powered SEO technology" },
        { name: "Case Studies", url: "/case-studies", description: "Client success stories and results" },
        { name: "Contact", url: "/contact", description: "Get in touch with our team" },
      ]
    },
    {
      category: "Resources",
      pages: [
        { name: "Blog", url: "/blog", description: "SEO insights, tips, and industry news" },
        { name: "AI SEO Guide", url: "/blog/ai-seo-future", description: "The future of AI-powered SEO" },
        { name: "Technical SEO", url: "/blog/technical-seo-issues", description: "Common technical SEO problems and solutions" },
        { name: "Content Marketing ROI", url: "/blog/content-marketing-roi", description: "Measuring content marketing success" },
        { name: "Local SEO Guide", url: "/blog/local-seo-guide", description: "Complete local SEO strategy" },
        { name: "E-commerce SEO", url: "/blog/ecommerce-seo", description: "SEO strategies for online stores" },
      ]
    },
    {
      category: "Legal",
      pages: [
        { name: "Terms of Service", url: "/terms", description: "Terms and conditions of service" },
        { name: "Privacy Policy", url: "/privacy", description: "How we handle your data and privacy" },
        { name: "Sitemap", url: "/sitemap", description: "Complete site structure and navigation" },
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-manrope font-bold mb-8">Sitemap</h1>
          <p className="text-xl text-secondary mb-8">
            Complete overview of all pages and resources on Brandforce.ai
          </p>

          <div className="space-y-8">
            {siteStructure.map((section, index) => (
              <Card key={index} className="bg-elevated border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-manrope">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="p-4 bg-midnight rounded-lg border border-secondary/10">
                        <div className="flex items-center justify-between mb-2">
                          <Link href={page.url}>
                            <h3 className="font-semibold text-lg hover:text-neon-green transition-colors">
                              {page.name}
                            </h3>
                          </Link>
                          <Link href={page.url}>
                            <Button size="sm" variant="ghost" className="p-1">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                        <p className="text-secondary text-sm mb-3">{page.description}</p>
                        <code className="text-xs text-neon-green bg-neon-green/10 px-2 py-1 rounded">
                          {page.url}
                        </code>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-elevated border-secondary/20 mt-8">
            <CardHeader>
              <CardTitle className="text-2xl font-manrope">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/contact">
                  <Button className="w-full">
                    Get Free SEO Audit
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="w-full">
                    View Services
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline" className="w-full">
                    Read Blog
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 p-6 bg-elevated rounded-lg border border-secondary/20">
            <h3 className="text-xl font-manrope font-bold mb-4">Need Help Finding Something?</h3>
            <p className="text-secondary mb-4">
              Can't find what you're looking for? Our team is here to help you navigate our services 
              and find the perfect SEO solution for your business.
            </p>
            <Link href="/contact">
              <Button>
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}