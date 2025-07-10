import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Services from "@/pages/services";
import AIEngine from "@/pages/ai-engine";
import CaseStudies from "@/pages/case-studies";
// import Pricing from "@/pages/pricing"; // Hidden for initial release
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import Sitemap from "@/pages/sitemap";
import NotFound from "@/pages/not-found";
import MobileStickyCTA from "@/components/ui/mobile-sticky-cta";

function Router() {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/ai-engine" component={AIEngine} />
          <Route path="/case-studies" component={CaseStudies} />
          {/* <Route path="/pricing" component={Pricing} /> Hidden for initial release */}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/sitemap" component={Sitemap} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      {/* <MobileStickyCTA /> */}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
