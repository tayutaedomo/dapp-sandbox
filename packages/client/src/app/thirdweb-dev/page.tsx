"use client";

import React from "react";
import type { NextPage } from "next";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";

export const GreetingAddress = process.env.NEXT_PUBLIC_GREETING_ADDRESS || "";

const ThirdwebDevPage: NextPage = () => {
  const address = useAddress();

  return (
    <main>
      <div>
        <ConnectWallet />
      </div>
      {address && (
        <div>
          <Web3Button
            contractAddress={GreetingAddress}
            action={async (contract) => {
              console.log(await contract.call("sayMyName"));
            }}
          >
            Hello by Web3Button
          </Web3Button>
        </div>
      )}
    </main>
  );
};

export default ThirdwebDevPage;
