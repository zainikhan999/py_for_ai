// ProgressBar.tsx - Coding Style Update
import React, { useState, useEffect } from "react";

// ========== ProgressBar.tsx ==========
interface ProgressBarProps {
  name: string;
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ name, progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 300);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="bg-black/20 border border-white/10 rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-mono text-sm">
          <span className="text-emerald-300">const</span>{" "}
          {name.toLowerCase().replace(/\s/g, "_")}
        </span>
        <span className="text-yellow-300 font-mono font-bold">{progress}%</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full transition-all duration-1000 relative"
          style={{ width: `${animatedProgress}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
