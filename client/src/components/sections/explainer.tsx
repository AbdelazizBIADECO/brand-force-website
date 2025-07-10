import { Bot, UserCheck, Zap } from "lucide-react";

export default function Explainer() {
  return (
    <section className="py-24 bg-elevated">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">Why Brandforce Works</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Our hybrid approach combines the speed of AI with the strategic thinking of human experts
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Automation */}
          <div className="bg-midnight rounded-2xl p-8 card-glow hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mb-6">
              <Bot className="text-neon-green text-2xl" />
            </div>
            <h3 className="text-2xl font-manrope font-bold mb-4">AI Automation</h3>
            <p className="text-secondary leading-relaxed">
              Advanced algorithms handle the heavy lifting — keyword mining, content scoring, technical audits.
            </p>
          </div>
          
          {/* Human Expertise */}
          <div className="bg-midnight rounded-2xl p-8 card-glow hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mb-6">
              <UserCheck className="text-neon-green text-2xl" />
            </div>
            <h3 className="text-2xl font-manrope font-bold mb-4">Human Expertise</h3>
            <p className="text-secondary leading-relaxed">
              Strategists interpret AI insights and execute what machines can't — creative strategy and relationship building.
            </p>
          </div>
          
          {/* Speed + Scale */}
          <div className="bg-midnight rounded-2xl p-8 card-glow hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mb-6">
              <Zap className="text-neon-green text-2xl" />
            </div>
            <h3 className="text-2xl font-manrope font-bold mb-4">Speed + Scale</h3>
            <p className="text-secondary leading-relaxed">
              Campaigns launch in days, not months. Scale your SEO efforts without scaling your headcount.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
