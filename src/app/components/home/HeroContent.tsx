import React from "react";
import { IoCode, IoArrowForward, IoPlayCircle, IoFlash } from "react-icons/io5";
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
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F4C542]/20 to-[#E8B424]/20 border border-[#F4C542]/30 px-4 py-2 rounded-full">
        <IoFlash className="text-[#F4C542]" size={18} />
        <span className="text-[#F4C542] font-medium text-sm sm:text-base">
          AI-Powered Learning
        </span>
      </div>

      {/* Heading */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
          Learn <span className="text-[#F4C542]">Python</span> with{" "}
          <span className="bg-gradient-to-r from-[#3B8FA5] to-[#2A6B7D] bg-clip-text text-transparent">
            AI Assistance
          </span>
        </h1>
      </div>

      {/* Description */}
      <div className="text-gray-400 leading-relaxed space-y-2 text-base sm:text-lg">
        <p>Master programming with personalized AI tutoring</p>
        <p>Interactive lessons and real-time code feedback</p>
        <p>Your journey to becoming a Python expert starts here</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full">
        <Button
          variant="primary"
          size="lg"
          onClick={onGetStarted}
          className="w-full sm:w-auto"
        >
          <IoCode size={20} />
          <span>Start Learning</span>
          <IoArrowForward size={20} />
        </Button>

        <Button
          variant="secondary"
          size="lg"
          onClick={onWatchDemo}
          className="w-full sm:w-auto"
        >
          <IoPlayCircle size={20} />
          <span>Watch Demo</span>
        </Button>
      </div>

      {/* Stats */}
      {/* Stats */}
      <div className="border-t border-gray-800 pt-6 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            value="10000"
            label="Students"
            color="text-[#3B8FA5]"
            delay={200}
          />
          <StatCard
            value="500"
            label="Lessons"
            color="text-[#F4C542]"
            delay={400}
          />
          <StatCard
            value="95"
            label="Success Rate"
            suffix="%"
            color="text-[#2A6B7D]"
            delay={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
