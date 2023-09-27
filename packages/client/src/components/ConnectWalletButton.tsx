"use client";

import React, { useContext } from "react";
import type { NextPage } from "next";
import CurrentAccountContext from "./CurrentAccountProvider";

const ConnectWalletButton: NextPage = () => {
  const { currentAccount, connectWallet } = useContext(CurrentAccountContext);
  const displayAddress =
    currentAccount !== undefined ? `${currentAccount.slice(0, 5)}...${currentAccount.slice(-4)}` : "";

  return (
    <div>
      {currentAccount === undefined ? (
        <button onClick={connectWallet}>Connect to wallet</button>
      ) : (
        <div>{displayAddress}</div>
      )}
    </div>
  );
};

export default ConnectWalletButton;
