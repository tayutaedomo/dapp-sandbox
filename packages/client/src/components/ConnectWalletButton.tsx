"use client";

import React, { useContext } from "react";
import type { NextPage } from "next";
import CurrentAccountContext from "./CurrentAccountProvider";
import { Badge, Box, Button, Text } from "@chakra-ui/react";

const ConnectWalletButton: NextPage = () => {
  const { currentAccount, connectWallet } = useContext(CurrentAccountContext);
  const displayAddress =
    currentAccount !== undefined ? `${currentAccount.slice(0, 5)}...${currentAccount.slice(-4)}` : "Unknown";

  return (
    <Box>
      {currentAccount === undefined ? (
        <Button onClick={connectWallet}>Connect to wallet</Button>
      ) : (
        <Badge px={5} py={2} bg={"gray.500"} rounded="full" textTransform="none">
          {displayAddress}
        </Badge>
      )}
    </Box>
  );
};

export default ConnectWalletButton;
