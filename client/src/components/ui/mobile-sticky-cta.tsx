import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function MobileStickyCTA() {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button className="bg-neon-green text-midnight shadow-lg pulse-slow">
        <Search className="mr-2 h-4 w-4" />
        <Link href="/contact">Free Audit</Link>
      </Button>
    </div>
  );
}
