"use client";

import { useState, useEffect } from "react";
import { IoBan, IoBookOutline, IoTrendingUp, IoTrophy } from "react-icons/io5";
import Navbar from "../../components/home/NavBar";
import HeroContent from "../../components/home/HeroContent";
import { LearningCard } from "../../components/home/LearningCard";
import FeatureCard from "../../components/home/FeatureCard";
import FloatingElement from "../../components/home/FloatingElement";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const courses = [
    { name: "Python Basics", progress: 85 },
    { name: "Data Structures", progress: 62 },
    { name: "AI & ML", progress: 40 },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleGetStarted = () => {
    console.log("Get Started clicked");
  };

  const handleWatchDemo = () => {
    console.log("Watch Demo clicked");
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated Background - Dark theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0} duration={4}>
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 opacity-10 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement delay={1} duration={5}>
          <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement delay={2} duration={6}>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-emerald-500 opacity-10 rounded-full blur-3xl" />
        </FloatingElement>
      </div>

      <Navbar onGetStarted={handleGetStarted} />

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent
            isLoaded={isLoaded}
            onGetStarted={handleGetStarted}
            onWatchDemo={handleWatchDemo}
          />

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <LearningCard courses={courses} />
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-mono mb-4 text-white">
            <span className="text-gray-500">{"<"}</span>
            Why Choose <span className="text-emerald-400">PyForAI</span>
            <span className="text-gray-500">{"?/>"}</span>
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            <span className="text-gray-600">//</span> Experience the future of
            coding education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={IoBan}
            title="AI-Powered Tutoring"
            description="Get personalized guidance and instant feedback from our advanced AI assistant"
            delay={100}
          />
          <FeatureCard
            icon={IoBookOutline}
            title="Interactive Lessons"
            description="Learn by doing with hands-on coding exercises and real-world projects"
            delay={200}
          />
          <FeatureCard
            icon={IoTrendingUp}
            title="Track Progress"
            description="Monitor your learning journey with detailed analytics and achievements"
            delay={300}
          />
          <FeatureCard
            icon={IoTrophy}
            title="Earn Certificates"
            description="Showcase your skills with industry-recognized certifications"
            delay={400}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
