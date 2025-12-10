import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}) => {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#3B8FA5] to-[#2A6B7D] text-white hover:shadow-xl hover:scale-105",
    secondary:
      "bg-gradient-to-r from-[#F4C542] to-[#E8B424] text-gray-900 hover:shadow-xl hover:scale-105",
    outline:
      "border-2 border-[#3B8FA5] text-[#3B8FA5] hover:bg-[#3B8FA5] hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
