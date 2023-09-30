"use client";

import React from "react";
import type { NextPage } from "next";
import { ConnectWallet, useAddress, useContract, useContractEvents } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";

export const GreetingAddress = process.env.NEXT_PUBLIC_GREETING_ADDRESS || "";

const ThirdwebDevPage: NextPage = () => {
  const address = useAddress();
  const [myName, setMyName] = React.useState("");
  const { contract } = useContract(GreetingAddress);
  const { data, isLoading } = useContractEvents(contract, "GreetingMessage");

  return (
    <main>
      <div>
        <ConnectWallet />
      </div>
      {address && (
        <>
          <div>
            <h3>Call sayMyName with Web3Button</h3>
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
            <div>
              <label htmlFor="my_name">Result</label>:
              <input type="text" id="my_name" value={myName} disabled={true} />
            </div>
          </div>

          <div>
            <h3>Call hello with Web3Button</h3>
            <Web3Button
              contractAddress={GreetingAddress}
              action={async (contract) => {
                await contract.call("hello");
              }}
            >
              Hello
            </Web3Button>
          </div>

          <div>
            <h3>GreetingMessage Events</h3>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <textarea rows={10} cols={100} value={JSON.stringify(data, null, 2)} disabled={true} />
            )}
          </div>
        </>
      )}
    </main>
  );
};

export default ThirdwebDevPage;
