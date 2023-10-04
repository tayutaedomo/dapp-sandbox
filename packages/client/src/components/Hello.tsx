"use client";

import React, { useEffect } from "react";
import type { NextPage } from "next";
import { useGreetingContract } from "@/hooks/useGreetingContract";
import { useWallet } from "@/hooks/useWallet";
import { Badge, Box, Button, Text } from "@chakra-ui/react";

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

  return (
    <Box>
      {!isHelloProcessing ? (
        <Button onClick={onClickHandler}>Hello</Button>
      ) : (
        <Badge px={5} py={2} bg={"gray.700"} shadow="md" rounded="full">
          Loading...
        </Badge>
      )}
    </Box>
  );
};

export default Hello;
