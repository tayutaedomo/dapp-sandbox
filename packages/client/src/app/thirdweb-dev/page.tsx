"use client";

import React from "react";
import type { NextPage } from "next";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const ThirdwebDevPage: NextPage = () => {
  const address = useAddress();

  return (
    <main>
      <ConnectWallet />
    </main>
  );
};

export default ThirdwebDevPage;
