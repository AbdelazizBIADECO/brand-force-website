import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/forms/contact-form";
import AuditForm from "@/components/forms/audit-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact - Brandforce.ai | Get in Touch with Our SEO Experts";
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Address",
      value: "123 Innovation Drive, San Francisco, CA 94107"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "hello@brandforce.ai"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Hours",
      value: "Mon-Fri: 9am-6pm PST"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-manrope font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-secondary mb-8">
              Ready to transform your SEO? Let's discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Free Audit Form */}
            <div>
              <h2 className="text-3xl font-manrope font-bold mb-6">Get Your Free SEO Audit</h2>
              <p className="text-secondary mb-8">
                Get a comprehensive analysis of your website's SEO performance in just 24 hours.
              </p>
              <AuditForm />
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-manrope font-bold mb-6">Have Questions?</h2>
              <p className="text-secondary mb-8">
                Want to discuss your specific needs? Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-manrope font-bold mb-6">Other Ways to Reach Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-midnight border-secondary/20 text-center hover:border-neon-green/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-neon-green">{info.icon}</div>
                  </div>
                  <CardTitle className="text-lg font-manrope">{info.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary text-sm">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Booking */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-manrope font-bold mb-6">
              Book a Strategy Call
            </h2>
            <p className="text-xl text-secondary mb-8">
              Schedule a 30-minute call with our SEO experts to discuss your goals and get personalized recommendations.
            </p>
            <div className="bg-elevated rounded-2xl p-8 card-glow">
              <div className="text-center">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-xl font-manrope font-bold mb-4">Strategy Call Scheduler</h3>
                <p className="text-secondary mb-6">
                  Choose a time that works for you and we'll send you a calendar invite with all the details.
                </p>
                <div className="bg-midnight rounded-lg p-4 text-sm text-secondary">
                  <p>Calendar integration would be embedded here in production</p>
                  <p className="mt-2">For now, please use the contact form above to schedule a call</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-manrope font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-midnight border-secondary/20">
              <CardHeader>
                <CardTitle className="text-lg font-manrope">How quickly can I see results?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Most clients see initial improvements within 4-6 weeks, with significant results typically appearing within 90 days. Our AI-powered approach accelerates the traditional SEO timeline.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-midnight border-secondary/20">
              <CardHeader>
                <CardTitle className="text-lg font-manrope">What makes your AI different?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Our AI is trained specifically on SEO data and combines multiple sources including Google Search Console, competitor analysis, and industry trends. It's not just ChatGPT for SEO—it's purpose-built for search optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-midnight border-secondary/20">
              <CardHeader>
                <CardTitle className="text-lg font-manrope">Do you work with all industries?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Yes! Our AI adapts to any industry, though we have particular expertise in SaaS, e-commerce, healthcare, and professional services. We customize our approach based on your specific market and competition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
