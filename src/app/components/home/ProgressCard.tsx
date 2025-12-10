import React, { useState, useEffect } from "react";

interface ProgressCardProps {
  title: string;
  progress: number;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  progress,
  icon: Icon,
}) => {
  const [animProgress, setAnimProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimProgress(progress), 300);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="bg-black/30 border border-white/10 rounded-lg p-4">
      <div className="flex items-center gap-3 mb-3">
        <Icon className="text-yellow-400" size={20} />
        <span className="text-white font-medium text-sm">{title}</span>
        <span className="ml-auto text-yellow-400 font-semibold">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-yellow-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${animProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressCard;
