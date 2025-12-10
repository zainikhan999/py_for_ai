import React from "react";

interface InfoCardProps {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  subtitle: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, subtitle }) => {
  return (
    <div className="bg-[#0d0d0d] border border-emerald-500/30 rounded-lg p-3 sm:p-4 shadow-lg">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="text-emerald-400" size={20} />
        </div>
        <div className="min-w-0">
          <div className="text-xs text-gray-500 font-mono truncate">
            <span className="text-gray-600">//</span>{" "}
            {subtitle.toLowerCase().replace(" ", "_")}
          </div>
          <div className="font-bold font-mono text-white text-sm sm:text-base truncate">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
