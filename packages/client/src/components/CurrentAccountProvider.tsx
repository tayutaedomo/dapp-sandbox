'use client';

import React from "react";
import { createContext, ReactNode } from 'react';

import { useWallet } from '../hooks/useWallet';

type AccountContext = {
  currentAccount: string | undefined;
  connectWallet: () => void;
};
const CurrentAccountContext = createContext<AccountContext>({
  currentAccount: '',
  connectWallet: () => {},
});

export const CurrentAccountProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { currentAccount, connectWallet } = useWallet();

  return (
    <CurrentAccountContext.Provider value={{currentAccount, connectWallet}}>
      {children}
    </CurrentAccountContext.Provider>
  );
};

export default CurrentAccountContext;
