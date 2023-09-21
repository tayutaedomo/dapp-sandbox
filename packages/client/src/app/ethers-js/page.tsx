import React from "react";
import type { NextPage } from "next";
import ConnectWalletButton from "@/components/ConnectWalletButton";

const EthersJs: NextPage = () => {
  return (
    <main>
      <ConnectWalletButton />
    </main>
  );
};

export default EthersJs;
