import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Users, Clock } from "lucide-react";

interface CaseStudyCardProps {
  client: string;
  industry: string;
  problem: string;
  solution: string;
  results: {
    traffic: string;
    conversions: string;
    keywords: string;
    timeframe: string;
  };
  testimonial: string;
  image: string;
}

export default function CaseStudyCard({
  client,
  industry,
  problem,
  solution,
  results,
  testimonial,
  image
}: CaseStudyCardProps) {
  return (
    <Card className="bg-elevated border-secondary/20 hover:border-neon-green/50 transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-manrope mb-2">{client}</CardTitle>
            <Badge variant="outline" className="border-neon-green text-neon-green">
              {industry}
            </Badge>
          </div>
          <img 
            src={image}
            alt={client}
            className="w-16 h-16 rounded-lg object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-manrope font-bold text-red-400 mb-2">Challenge</h4>
          <p className="text-secondary text-sm">{problem}</p>
        </div>

        <div>
          <h4 className="font-manrope font-bold text-blue-400 mb-2">Solution</h4>
          <p className="text-secondary text-sm">{solution}</p>
        </div>

        <div>
          <h4 className="font-manrope font-bold text-neon-green mb-4">Results</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-4 w-4 text-neon-green mr-1" />
              </div>
              <div className="text-2xl font-manrope font-bold text-neon-green">{results.traffic}</div>
              <div className="text-xs text-secondary">Organic Traffic</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="h-4 w-4 text-neon-green mr-1" />
              </div>
              <div className="text-2xl font-manrope font-bold text-neon-green">{results.conversions}</div>
              <div className="text-xs text-secondary">Conversions</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-4 w-4 text-neon-green mr-1" />
              </div>
              <div className="text-2xl font-manrope font-bold text-neon-green">{results.keywords}</div>
              <div className="text-xs text-secondary">Keywords Ranking</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-4 w-4 text-neon-green mr-1" />
              </div>
              <div className="text-2xl font-manrope font-bold text-neon-green">{results.timeframe}</div>
              <div className="text-xs text-secondary">Time Frame</div>
            </div>
          </div>
        </div>

        <div className="bg-midnight rounded-lg p-4">
          <p className="text-secondary text-sm italic">"{testimonial}"</p>
        </div>
      </CardContent>
    </Card>
  );
}
