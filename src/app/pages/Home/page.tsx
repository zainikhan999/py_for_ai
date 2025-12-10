"use client";

import { useState, useEffect } from "react";
import {
  IoFlash,
  IoBookOutline,
  IoTrendingUp,
  IoTrophy,
} from "react-icons/io5";
import Navbar from "../../components/home/NavBar";
import HeroContent from "../../components/home/HeroContent";
import { LearningCard } from "../../components/home/LearningCard";
import FeatureCard from "../../components/home/FeatureCard";

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
      {/* Simplified Background - Better Performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500 opacity-5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-yellow-500 opacity-5 rounded-full blur-3xl" />
      </div>

      <Navbar onGetStarted={handleGetStarted} />

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 pt-12 sm:pt-20 pb-20 sm:pb-32">
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

      {/* Features Section */}
      <div id="features" className="relative z-10 container mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Why Choose <span className="text-yellow-400">PyForAI</span>?
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to master Python programming
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={IoFlash}
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

      {/* CTA Section */}
      <div className="relative z-10 container mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-yellow-600 to-cyan-600 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Ready to Start Your Python Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students learning Python with AI assistance. Start
            for free today!
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            Start Learning Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 PyLearn AI. Made with ❤️ for Python learners.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in;
        }
      `}</style>
    </div>
  );
}
