"use client";

import React, { useEffect } from "react";
import type { NextPage } from "next";
import { useGreetingContract } from "@/hooks/useGreetingContract";
import { useWallet } from "@/hooks/useWallet";

const Hello: NextPage = () => {
  const { currentAccount } = useWallet();
  const { greeting, hello, isHelloProcessing } = useGreetingContract({ currentAccount });

  const onClickHandler = async () => {
    await hello();
  };

  // Set up event listeners
  useEffect(() => {
    if (!greeting) return;

    const onGreetingMessage = (from: string, message: string) => {
      console.log(`GreetingMessage event received from ${from}: ${message}`);
    };

    greeting.on("GreetingMessage", onGreetingMessage);

    return () => {
      if (greeting) greeting.off("GreetingMessage", onGreetingMessage);
    };
  }, [greeting]);

  return <div>{!isHelloProcessing ? <button onClick={onClickHandler}>Hello</button> : <div>Loading...</div>}</div>;
};

export default Hello;
