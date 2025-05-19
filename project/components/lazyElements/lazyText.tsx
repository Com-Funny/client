"use client";
import { useEffect, useRef, useState } from "react";

interface CommonTextProps {
  text?: string;
  className?: string;
}

export default function LazyText({
  className = "",
  text = "",
}: CommonTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={textRef}
      className={`transition-opacity delay-100 duration-2000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      <p className="w-full h-auto">{text}</p>
    </div>
  );
}
