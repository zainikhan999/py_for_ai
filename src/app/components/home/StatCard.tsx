import React, { useState, useEffect } from "react";

interface StatCardProps {
  value: string;
  label: string;
  suffix?: string;
  delay?: number;
  color?: string; // <-- NEW PROP
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  suffix = "+",
  delay = 0,
  color = "text-emerald-400", // default
}) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const increment = target / 40;
      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 40);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, delay]);

  return (
    <div className="text-center transform hover:scale-105 transition-transform duration-300">
      <div className={`text-3xl sm:text-4xl font-bold mb-1 ${color}`}>
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
