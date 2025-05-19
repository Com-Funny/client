"use client";

interface CommonImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function CommonImage({
  src,
  alt,
  className = "",
}: CommonImageProps) {
  return (
    <div className={`${className} animate-fade-in opacity-0`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        srcSet={`${src}?w=320 320w, ${src}?w=640 640w, ${src}?w=1280 1280w`}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
