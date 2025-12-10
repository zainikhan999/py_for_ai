// LearningCard.tsx - Coding Style Update
import React from "react";
import { IoTerminal, IoTrophy, IoPeople } from "react-icons/io5";
import FloatingElement from "./FloatingElement";
import ProgressBar from "./ProgressBar";
import InfoCard from "./InfoCard";

interface CourseProgress {
  name: string;
  progress: number;
}

interface LearningCardProps {
  courses: CourseProgress[];
}

const LearningCard: React.FC<LearningCardProps> = ({ courses }) => {
  return (
    <div className="relative">
      <div className="bg-linear-to-br from-emerald-600 to-cyan-700 border border-emerald-400/30 rounded-2xl p-8 shadow-2xl shadow-emerald-500/20 transform hover:scale-105 transition-all duration-500">
        {/* Terminal header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-black/30 border border-white/20 rounded-lg flex items-center justify-center">
            <IoTerminal className="text-white" size={24} />
          </div>
          <div className="text-white font-mono">
            <div className="text-xs opacity-90">
              <span className="text-yellow-300">$</span> ai_assistant
            </div>
            <div className="font-bold">learning_progress.py</div>
          </div>
        </div>

        <div className="space-y-4">
          {courses.map((course, index) => (
            <ProgressBar
              key={index}
              name={course.name}
              progress={course.progress}
            />
          ))}
        </div>
      </div>

      <FloatingElement delay={0.5} duration={3}>
        <div className="absolute -top-6 -right-6">
          <InfoCard
            icon={IoTrophy}
            title="Code Master!"
            subtitle="Achievement"
          />
        </div>
      </FloatingElement>

      <FloatingElement delay={1} duration={4}>
        <div className="absolute -bottom-6 -left-6">
          <InfoCard
            icon={IoPeople}
            title="2,847 Students"
            subtitle="Active Now"
          />
        </div>
      </FloatingElement>
    </div>
  );
};

export default LearningCard;
