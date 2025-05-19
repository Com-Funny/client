"use client";
import { useEffect, useRef, useState } from "react";

interface CommonImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClass?: string;
  width?: string;
  priority?: boolean;
}

export default function LazyImage({
  src,
  alt,
  className = "",
  imageClass = "",
  width = "100%",
  priority = false,
}: CommonImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );
    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={`transition-all delay-300 duration-1200 ${
        isVisible ? "opacity-100" : "opacity-10 bg-gray"
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        className={`w-full h-full ${imageClass}`}
        loading={priority ? "eager" : "lazy"}
        srcSet={`${src}?w=320 320w, ${src}?w=640 640w, ${src}?w=1280 1280w`}
      />
    </div>
  );
}
