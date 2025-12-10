// InfoCard.tsx - Coding Style Update
import React from "react";

interface InfoCardProps {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  subtitle: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, subtitle }) => {
  return (
    <div className="bg-[#0d0d0d] border border-emerald-500/30 rounded-lg p-4 shadow-xl shadow-emerald-500/20 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-linear-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center">
          <Icon className="text-emerald-400" size={24} />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-mono">
            <span className="text-gray-600">//</span>{" "}
            {subtitle.toLowerCase().replace(" ", "_")}
          </div>
          <div className="font-bold font-mono text-white">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
