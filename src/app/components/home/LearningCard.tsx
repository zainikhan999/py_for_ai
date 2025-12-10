import React from "react";
import { IoTerminal, IoTrophy, IoPeople } from "react-icons/io5";
import { ProgressBar } from "./ProgressBar";
import InfoCard from "./InfoCard";

interface CourseProgress {
  name: string;
  progress: number;
}

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  delay = 0,
  duration = 3,
}) => {
  return (
    <div
      className="animate-float"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
};

interface LearningCardProps {
  courses: CourseProgress[];
}

export const LearningCard: React.FC<LearningCardProps> = ({ courses }) => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-emerald-600 to-cyan-700 border border-emerald-400/30 rounded-2xl p-6 sm:p-8 shadow-xl transform hover:scale-105 transition-all duration-500">
        <div className="flex items-center gap-3 mb-4 sm:mb-6 flex-wrap">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/30 border border-white/20 rounded-lg flex items-center justify-center">
            <IoTerminal className="text-white" size={24} />
          </div>
          <div className="text-white font-mono">
            <div className="text-xs sm:text-sm opacity-90">
              <span className="text-yellow-300">$</span> ai_assistant
            </div>
            <div className="font-bold text-sm sm:text-base">
              learning_progress.py
            </div>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
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
        <div className="absolute top-8 -right-2 sm:top-6 sm:-right-4 md:top-4 md:-right-6 scale-75 sm:scale-90 md:scale-100">
          <InfoCard
            icon={IoTrophy}
            title="Code Master!"
            subtitle="Achievement"
          />
        </div>
      </FloatingElement>

      <FloatingElement delay={1} duration={4}>
        <div className="absolute -bottom-8 -left-2 sm:-bottom-10 sm:-left-4 md:-bottom-12 md:-left-6 scale-75 sm:scale-90 md:scale-100">
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
