import { useEffect, useCallback, useState } from "react";

import { ethers } from "ethers";
import { getEthereum } from "../utils/ethereum";
import GreetingAbi from "../artifacts/Greeting.json";
import { type Greeting as GreetingType } from "../types/contract";

interface PropsUseGreetingContract {
  currentAccount: string | undefined;
}

interface ReturnUseGreetingContract {
  // greeting: GreetingType | undefined;
  hello: () => Promise<void>;
  isHelloProcessing: boolean;
}

export const GreetingAddress = process.env.greetingAddress || "";

export const useContract = ({ currentAccount }: PropsUseGreetingContract): ReturnUseGreetingContract => {
  const [greeting, setGreeting] = useState<GreetingType>();
  const [isHelloProcessing, setIsHelloProcessing] = useState(false);
  const ethereum = getEthereum();

  const getContract = useCallback(
    (contractAddress: string, abi: ethers.ContractInterface, storeContract: (_: ethers.Contract) => void) => {
      if (!ethereum) {
        console.log("Ethereum object doesn't exist!");
        return;
      }
      if (!currentAccount) {
        console.log("currentAccount doesn't exist!");
        return;
      }
      try {
        const provider = new ethers.providers.Web3Provider(ethereum as unknown as ethers.providers.ExternalProvider);
        const signer = provider.getSigner();
        const Contract = new ethers.Contract(contractAddress, abi, signer);
        storeContract(Contract);
      } catch (error) {
        console.log(error);
      }
    },
    [ethereum, currentAccount]
  );

  useEffect(() => {
    getContract(GreetingAddress, GreetingAbi.abi, (Contract: ethers.Contract) => {
      setGreeting(Contract as GreetingType);
    });
  }, [ethereum, currentAccount, getContract]);

  const hello = useCallback(async () => {
    if (!currentAccount) return;
    if (!greeting) return;

    try {
      setIsHelloProcessing(true);
      const tx = await greeting.hello();
      await tx.wait();
      setIsHelloProcessing(false);
    } catch (error) {
      setIsHelloProcessing(false);
      console.error(error);
      alert(error);
    }
  }, [greeting, currentAccount]);

  // Set event listeners
  useEffect(() => {
    if (!greeting) return;
    const onGreetingMessage = (from: string, message: string) => {
      console.log(`GreetingMessage event received from ${from}: ${message}`);
    };

    const greetingEvent = greeting.getEvent("GreetingMessage");
    greeting.on(greetingEvent, onGreetingMessage);

    return () => {
      if (greeting) greeting.off(greetingEvent, onGreetingMessage);
    };
  }, [greeting]);

  return {
    // greeting,
    hello,
    isHelloProcessing,
  };
};
