import { ReactNode } from "react";

interface CardBoxProps {
  className?: string;
  children?: ReactNode;
}

export default function CardBox({ className, children }: CardBoxProps) {
  return (
    <div className={"bg-card shadow-default rounded-2xl " + className}>
      {children}
    </div>
  );
}
