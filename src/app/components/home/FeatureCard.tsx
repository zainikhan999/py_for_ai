import React, { useState, useEffect } from "react";

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-[#0d0d0d] border border-emerald-500/30 rounded-lg p-6 shadow-lg hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-emerald-400" size={28} />
      </div>

      <h3 className="text-xl font-bold font-mono text-white mb-2">
        <span className="text-gray-600">{"<"}</span>
        {title}
        <span className="text-gray-600">{"/>"}</span>
      </h3>

      <p className="text-gray-400 font-mono text-sm leading-relaxed">
        <span className="text-gray-600">//</span> {description}
      </p>
    </div>
  );
};
export default FeatureCard;
