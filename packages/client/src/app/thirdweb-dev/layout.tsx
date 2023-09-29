import React from "react";
import { ThirdwebProvider } from "@/components/ThirdwebProvider";

export default function ThirdwebDevLayout({ children }: { children: React.ReactNode }) {
  return <ThirdwebProvider activeChain="mumbai">{children}</ThirdwebProvider>;
}
