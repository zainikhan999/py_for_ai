import React, { useState } from "react";
import Button from "../Button";

interface NavbarProps {
  onGetStarted: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGetStarted }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-10 w-full bg-black text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/py_ai_logo.png"
            alt="PyForAI Logo"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
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
              xmlns="http://www.w3.org/2000/svg"
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
        <div className="md:hidden bg-black px-6 pb-4 flex flex-col gap-3">
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
      )}
    </nav>
  );
};

export default Navbar;
