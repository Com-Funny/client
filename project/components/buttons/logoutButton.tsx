"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
}

export default function LogoutButton({ children, disabled }: ButtonProps) {
  const router = useRouter();
  const onClick = () => {
    document.cookie =
      "accessToken" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie =
      "refreshToken" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/sign/in");
  };

  return (
    <button
      onClick={onClick}
      className="w-9 h-9 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity duration-200 ease-in-out"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
