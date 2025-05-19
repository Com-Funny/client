"use client";

import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
  disabled?: boolean;
}

export default function CommonButton({
  children,
  onClick,
  className,
  disabled,
}: ButtonProps) {
  return;
}
