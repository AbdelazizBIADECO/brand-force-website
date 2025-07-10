import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-elevated rounded-xl p-6 text-center hover:bg-neon-green/10 transition-all duration-300 cursor-pointer group">
      <div className="w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        <div className="text-neon-green">
          {icon}
        </div>
      </div>
      <h3 className="font-manrope font-bold mb-2">{title}</h3>
      <p className="text-sm text-secondary">{description}</p>
    </div>
  );
}
