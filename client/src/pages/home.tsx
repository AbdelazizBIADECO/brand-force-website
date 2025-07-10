import { useEffect } from "react";
import Hero from "@/components/sections/hero";
import Explainer from "@/components/sections/explainer";
import ServicesSnapshot from "@/components/sections/services-snapshot";
import ProofOfImpact from "@/components/sections/proof-of-impact";
import Testimonials from "@/components/sections/testimonials";
import AuditCTA from "@/components/sections/audit-cta";

export default function Home() {
  useEffect(() => {
    document.title = "Brandforce.ai - AI-Powered SEO. Human-Level Results.";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "We fuse artificial intelligence with top-tier SEO experts to deliver unmatched search performance — fast, affordable, scalable.");
    }
  }, []);

  return (
    <div className="pt-16">
      <Hero />
      <Explainer />
      <ServicesSnapshot />
      <ProofOfImpact />
      <Testimonials />
      <AuditCTA />
    </div>
  );
}
