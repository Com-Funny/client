"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_URL);
  }, []);
  return <div>배포테스트</div>;
}
