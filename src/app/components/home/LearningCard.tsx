import React from "react";
import { IoBookOutline, IoTrophy, IoPeople, IoCode } from "react-icons/io5";
import ProgressCard from "./ProgressCard";
import TypingTerminal from "./TypingTerminal";

interface CourseProgress {
  name: string;
  progress: number;
}

interface LearningCardProps {
  courses: CourseProgress[];
}

export const LearningCard: React.FC<LearningCardProps> = ({ courses }) => {
  const icons = [IoCode, IoBookOutline, IoBookOutline];

  return (
    <div className="space-y-6">
      {/* Typing Terminal */}
      <TypingTerminal />

      {/* Progress Section (bluish bg added here only) */}
      <div className="bg-gradient-to-br from-blue-700/30 via-blue-600/20 to-cyan-600/30 border border-blue-500/30 rounded-xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <IoBookOutline className="text-cyan-300" size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-white">Your Progress</h3>
            <p className="text-sm text-gray-400">Keep learning!</p>
          </div>
        </div>

        <div className="space-y-4">
          {courses.map((course, index) => (
            <ProgressCard
              key={index}
              title={course.name}
              progress={course.progress}
              icon={icons[index]}
            />
          ))}
        </div>
      </div>

      {/* Stats Cards (UNCHANGED) */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center hover:border-emerald-500/50 transition-colors">
          <IoTrophy className="text-yellow-400 mx-auto mb-2" size={24} />
          <div className="text-sm font-semibold text-white">Code Master</div>
          <div className="text-xs text-gray-400">Achievement</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center hover:border-emerald-500/50 transition-colors">
          <IoPeople className="text-cyan-400 mx-auto mb-2" size={24} />
          <div className="text-sm font-semibold text-white">2,847 Active</div>
          <div className="text-xs text-gray-400">Students Online</div>
        </div>
      </div>
    </div>
  );
};

export default LearningCard;
