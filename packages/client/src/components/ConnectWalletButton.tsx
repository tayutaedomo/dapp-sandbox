import { useContext } from 'react';
import CurrentAccountContext from './CurrentAccountProvider';

export default function ConnectWalletButton() {
  const { currentAccount, connectWallet } = useContext(CurrentAccountContext);
  const displayAddress = currentAccount ? `${currentAccount.slice(0, 5)}...${currentAccount.slice(-3)}` : "";

  return (
    <div>
      {currentAccount == undefined ? (
        <button onClick={connectWallet}>
          Connect to wallet
        </button>
      ) : (
        <div>
          {displayAddress}
        </div>
      )}
    </div>
  );
}
