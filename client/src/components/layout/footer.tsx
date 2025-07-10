import { Link } from "wouter";
import { Brain } from "lucide-react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-midnight py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-neon-green rounded-lg flex items-center justify-center">
                <Brain className="text-midnight text-lg" />
              </div>
              <span className="text-xl font-manrope font-bold">Brandforce.ai</span>
            </div>
            <p className="text-secondary mb-4">
              AI-powered SEO that delivers human-level results for modern businesses.
            </p>
            {/* Social media handles hidden for initial release */}
            {/* <div className="flex space-x-4">
              <FaTwitter className="text-neon-green text-xl hover:text-white cursor-pointer transition-colors" />
              <FaLinkedin className="text-neon-green text-xl hover:text-white cursor-pointer transition-colors" />
              <FaGithub className="text-neon-green text-xl hover:text-white cursor-pointer transition-colors" />
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-manrope font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-secondary">
              <li><Link href="/services" className="hover:text-neon-green transition-colors">AI Keyword Research</Link></li>
              <li><Link href="/services" className="hover:text-neon-green transition-colors">Technical SEO</Link></li>
              <li><Link href="/services" className="hover:text-neon-green transition-colors">Content Optimization</Link></li>
              <li><Link href="/services" className="hover:text-neon-green transition-colors">Link Building</Link></li>
              <li><Link href="/services" className="hover:text-neon-green transition-colors">Local SEO</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-manrope font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-secondary">
              <li><Link href="/about" className="hover:text-neon-green transition-colors">About</Link></li>
              <li><Link href="/case-studies" className="hover:text-neon-green transition-colors">Results</Link></li>
              <li><Link href="/blog" className="hover:text-neon-green transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-neon-green transition-colors">Contact</Link></li>
              <li><Link href="/about" className="hover:text-neon-green transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-manrope font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-secondary">
              <li><Link href="/contact" className="hover:text-neon-green transition-colors">Free SEO Audit</Link></li>
              {/* <li><Link href="/blog" className="hover:text-neon-green transition-colors">SEO Calculator</Link></li> Hidden for initial release */}
              <li><Link href="/case-studies" className="hover:text-neon-green transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-neon-green transition-colors">Help Center</Link></li>
              {/* <li><Link href="/ai-engine" className="hover:text-neon-green transition-colors">API Docs</Link></li> Hidden for initial release */}
            </ul>
          </div>
        </div>

        <div className="border-t border-elevated mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-secondary">
            © 2024 Brandforce.ai. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-secondary hover:text-neon-green transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-secondary hover:text-neon-green transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="text-secondary hover:text-neon-green transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
