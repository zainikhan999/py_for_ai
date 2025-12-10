import React, { useState, useEffect } from "react";

const TypingTerminal = () => {
  const [text, setText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = 'print("Hello, Python Learner! 🐍")';
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="bg-black rounded-lg p-4 border border-blue-600/30 shadow-xl">
      {/* Terminal header dots */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
        </div>
        <span className="text-gray-400 text-sm">terminal</span>
      </div>

      {/* Terminal content */}
      <div className="font-mono text-sm">
        <div className="text-yellow-400">
          {text}
          <span
            className={`${
              cursorVisible ? "opacity-100" : "opacity-0"
            } text-blue-400`}
          >
            |
          </span>
        </div>
        {isComplete && (
          <div className="text-blue-400 mt-2 animate-fadeIn">
            → Hello, Python Learner! 🐍
          </div>
        )}
      </div>
    </div>
  );
};

export default TypingTerminal;
