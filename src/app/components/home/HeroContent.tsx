import React from "react";
import {
  IoTerminal,
  IoArrowForward,
  IoPlayCircle,
  IoCode,
} from "react-icons/io5";
import Button from "../Button";
import StatCard from "./StatCard";

interface HeroContentProps {
  isLoaded: boolean;
  onGetStarted: () => void;
  onWatchDemo: () => void;
}

const HeroContent: React.FC<HeroContentProps> = ({
  isLoaded,
  onGetStarted,
  onWatchDemo,
}) => {
  return (
    <div
      className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
        isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
    >
      {/* Terminal-style badge */}
      <div className="inline-flex flex-wrap items-center gap-2 bg-linear-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 px-3 py-2 rounded-lg font-mono backdrop-blur text-sm sm:text-base">
        <IoTerminal className="text-emerald-400" size={20} />
        <span className="text-emerald-400 font-semibold">
          <span className="text-gray-500">$</span> ai_powered_learning
        </span>
        <span className="text-emerald-400 animate-pulse">_</span>
      </div>

      {/* Code-style heading */}
      <div className="space-y-2">
        <div className="font-mono text-xs sm:text-sm text-gray-500 flex flex-wrap gap-1">
          <span className="text-purple-400">def</span>{" "}
          <span className="text-yellow-400">learn_python</span>
          <span className="text-gray-400">()</span>
          <span className="text-gray-500">:</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-mono leading-tight pl-2 sm:pl-4">
          <span className="text-gray-500">{"<"}</span>
          Learn <span className="text-emerald-400">Python</span>
          <span className="text-gray-500">{"/>"}</span> with{" "}
          <span className="bg-linear-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent">
            AI.assist()
          </span>
        </h1>
      </div>

      {/* Code comment style description */}
      <div className="font-mono text-gray-400 leading-relaxed pl-2 sm:pl-4 space-y-1 text-sm sm:text-base">
        <div className="flex gap-2 flex-wrap">
          <span className="text-gray-600">›</span>
          <span className="text-gray-500">//</span>
          <span>Master programming with personalized AI tutoring</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="text-gray-600">›</span>
          <span className="text-gray-500">//</span>
          <span>Interactive lessons and real-time code feedback</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="text-gray-600">›</span>
          <span className="text-gray-500">//</span>
          <span>Your journey to becoming a Python expert starts here</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
        <Button variant="primary" size="lg" onClick={onGetStarted}>
          <IoCode size={20} />
          <span className="font-mono">start_learning()</span>
          <IoArrowForward size={20} />
        </Button>
        <Button variant="outline" size="lg" onClick={onWatchDemo}>
          <IoPlayCircle size={20} />
          <span className="font-mono">watch_demo()</span>
        </Button>
      </div>

      {/* Terminal-style stats container */}
      <div className="border-t border-emerald-500/30 pt-6">
        <div className="bg-[#0d0d0d] border border-emerald-500/30 rounded-lg p-1 mb-4 inline-flex items-center gap-2 flex-wrap">
          <div className="flex gap-1.5 px-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-xs sm:text-sm text-gray-500 font-mono pr-2">
            stats.py
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <StatCard value="10000" label="students" delay={200} />
          <StatCard value="500" label="lessons" delay={400} />
          <StatCard value="95" label="success_rate" delay={600} />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
