import React, { useState } from "react";
import { IoCode } from "react-icons/io5";
import Button from "../Button";

interface NavbarProps {
  onGetStarted: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGetStarted }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-10 w-full bg-black/50 backdrop-blur-sm border-b border-gray-800 sticky top-0">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/py_ai_logo.png"
              alt="PyForAI Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
          >
            Features
          </a>
          <a
            href="#courses"
            className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
          >
            Courses
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
          >
            About
          </a>
          <Button variant="primary" size="sm" onClick={onGetStarted}>
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-emerald-400 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800 px-6 pb-4 flex flex-col gap-3">
          <a
            href="#features"
            className="text-gray-400 hover:text-emerald-400 transition-colors text-sm py-2"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#courses"
            className="text-gray-400 hover:text-emerald-400 transition-colors text-sm py-2"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:text-emerald-400 transition-colors text-sm py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <Button variant="primary" size="sm" onClick={onGetStarted}>
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
