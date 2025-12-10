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
      className={`bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl hover:border-yellow-500/50 transition-all duration-300 transform hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-yellow-400" size={24} />
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
