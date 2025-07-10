import { useState, useEffect } from "react";

interface AnimatedTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  pauseDuration?: number;
}

export default function AnimatedText({ 
  texts, 
  className = "", 
  typingSpeed = 150, 
  pauseDuration = 2000 
}: AnimatedTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      const targetText = texts[currentTextIndex];
      if (currentText.length < targetText.length) {
        timeout = setTimeout(() => {
          setCurrentText(targetText.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentText("");
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isTyping, texts, typingSpeed, pauseDuration]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={`inline-block ${className}`}>
      {currentText}
      <span 
        className={`inline-block w-0.5 h-1em bg-neon-green ml-1 transition-opacity ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ height: '1em', verticalAlign: 'middle' }}
      />
    </span>
  );
}
