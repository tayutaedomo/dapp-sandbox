'use client';

import React from "react";
import type { NextPage } from "next";
import { useGreetingContract } from "@/hooks/useGreetingContract";
import { useWallet } from "@/hooks/useWallet";

const Hello: NextPage = () => {
  const { currentAccount } = useWallet();
  const { hello, isHelloProcessing } = useGreetingContract({currentAccount});

  const onClickHandler = async () => {
    await hello();
  };

  return (
    <div>
      {!isHelloProcessing ? <button onClick={onClickHandler}>Hello</button> : <div>Loading...</div>}
    </div>
  );
}

export default Hello;
