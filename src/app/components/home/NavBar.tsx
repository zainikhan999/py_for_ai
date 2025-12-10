// NavBar.tsx - Coding Style Update
import React from "react";
import Button from "../Button";

interface NavbarProps {
  onGetStarted: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGetStarted }) => {
  return (
    <nav className="relative z-10 container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/py_ai_logo.png"
              alt="PyForAI Logo"
              className="h-15 w-auto object-contain"
            />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-gray-400 hover:text-emerald-400 transition-colors font-mono text-sm"
          >
            <span className="text-gray-600">./</span>features
          </a>
          <a
            href="#courses"
            className="text-gray-400 hover:text-emerald-400 transition-colors font-mono text-sm"
          >
            <span className="text-gray-600">./</span>courses
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:text-emerald-400 transition-colors font-mono text-sm"
          >
            <span className="text-gray-600">./</span>about
          </a>
          <Button variant="primary" size="sm" onClick={onGetStarted}>
            <span className="font-mono">init()</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
