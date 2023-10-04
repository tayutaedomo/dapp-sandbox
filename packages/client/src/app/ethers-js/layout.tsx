import React from "react";
import { CurrentAccountProvider } from "@/components/CurrentAccountProvider";

export default function EthersJSLayout({ children }: { children: React.ReactNode }) {
  return <CurrentAccountProvider>{children}</CurrentAccountProvider>;
}
