'use client';

import React, { useContext } from "react";
import type { NextPage } from "next";
import CurrentAccountContext from "./CurrentAccountProvider";
import Hello from "./Hello";

const ConnectWalletButton: NextPage = () => {
  const { currentAccount, connectWallet } = useContext(CurrentAccountContext);
  const displayAddress = currentAccount !== undefined ? `${currentAccount.slice(0, 5)}...${currentAccount.slice(-4)}` : "";

  return (
    <div className="container">
      <div>
        {currentAccount === undefined ? (
          <button onClick={connectWallet}>Connect to wallet</button>
        ) : (
          <div>{displayAddress}</div>
        )}
      </div>
      <div>
        <Hello />
      </div>
    </div>
  );
}

export default ConnectWalletButton;
