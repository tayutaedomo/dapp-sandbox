import React from "react";
import type { NextPage } from "next";
import ConnectWalletButton from "@/components/ConnectWalletButton";
import Hello from "@/components/Hello";

const EthersJs: NextPage = () => {
  return (
    <main>
      <div className="header">
        <ConnectWalletButton />
      </div>
      <div className="container">
        <Hello />
      </div>
    </main>
  );
};

export default EthersJs;
