import React, { useState, useEffect } from "react";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const increment = target / 50;
      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, delay]);

  return (
    <div className="text-center transform hover:scale-110 transition-all duration-300">
      <div className="text-4xl font-bold font-mono text-emerald-400 mb-2">
        {label === "success_rate" ? `${count}%` : `${count.toLocaleString()}+`}
      </div>
      <div className="text-gray-500 font-mono text-sm uppercase tracking-wider">
        <span className="text-gray-600">//</span> {label}
      </div>
    </div>
  );
};

export default StatCard;
