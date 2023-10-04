"use client";

import React from "react";
import type { NextPage } from "next";
import { ConnectWallet, useAddress, useContract, useContractEvents } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";
import { Box, Code, Container, Heading, Input, InputGroup, InputLeftAddon, Textarea, VStack } from "@chakra-ui/react";

export const GreetingAddress = process.env.NEXT_PUBLIC_GREETING_ADDRESS || "";

const ThirdwebDevPage: NextPage = () => {
  const address = useAddress();
  const [myName, setMyName] = React.useState("");
  const { contract } = useContract(GreetingAddress);
  const { data, isLoading } = useContractEvents(contract, "GreetingMessage");

  return (
    <VStack>
      <Container py={5}>
        <Box mb={5}>
          <ConnectWallet />
        </Box>
        {address && (
          <>
            <Box mb={5}>
              <Heading as="h3">Call sayMyName with Web3Button</Heading>
              <Web3Button
                contractAddress={GreetingAddress}
                action={async (contract) => {
                  const name = await contract.call("sayMyName");
                  console.log(`My Name is ${name}`);
                  setMyName(name);
                }}
              >
                My Name
              </Web3Button>
              <InputGroup size="sm" mt={2}>
                <InputLeftAddon>Result</InputLeftAddon>
                <Input type="text" id="my_name" value={myName} disabled={true} variant="filled" />
              </InputGroup>
            </Box>

            <Box mb={5}>
              <Heading as="h3">Call hello with Web3Button</Heading>
              <Web3Button
                contractAddress={GreetingAddress}
                action={async (contract) => {
                  await contract.call("hello");
                }}
              >
                Hello
              </Web3Button>
            </Box>

            <Box>
              <Heading as="h3">GreetingMessage Events</Heading>
              {isLoading ? (
                <Box>Loading...</Box>
              ) : (
                <Textarea rows={10} cols={100} value={JSON.stringify(data, null, 2)} disabled={true} />
              )}
            </Box>
          </>
        )}
      </Container>
    </VStack>
  );
};

export default ThirdwebDevPage;
