import React from "react";
import type { NextPage } from "next";
import ConnectWalletButton from "@/components/ConnectWalletButton";
import Hello from "@/components/Hello";
import { Box, Container, VStack } from "@chakra-ui/react";

const EthersJs: NextPage = () => {
  return (
    <VStack>
      <Container>
        <Box m={5}>
          <ConnectWalletButton />
        </Box>
        <Box m={5}>
          <Hello />
        </Box>
      </Container>
    </VStack>
  );
};

export default EthersJs;
