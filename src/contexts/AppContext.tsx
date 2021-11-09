import Onboard from "bnc-onboard";
import { API as OnboardAPI } from "bnc-onboard/dist/src/interfaces";
import React from "react";
import Web3 from "web3";

import { useTheme } from "@mui/material";
import SuperfluidSDK from "@superfluid-finance/js-sdk";

type AppContextType = {
  isLoading: boolean;
  web3: Web3 | null;
  userAddress: string | null;
  chainId: number | null;
  sf: SuperfluidSDK.Framework | null;
  changeChain: (_: number) => Promise<void>;
  connectWallet: () => Promise<void>;
};

export const AppContext = React.createContext({} as AppContextType);

export const AppProvider: React.FC = ({ children }) => {
  const theme = useTheme();
  const [isLoading, setLoading] = React.useState(true);
  const [lastWallet, setLastWallet] = React.useState<string | null | undefined>(
    undefined,
  );
  const [onboard, setOnboard] = React.useState<OnboardAPI | null>(null);
  const [web3, setWeb3] = React.useState<Web3 | null>(null);
  const [userAddress, setUserAddress] = React.useState<string | null>(null);
  const [chainId, setChainId] = React.useState<number | null>(null);
  const [sf, setSf] = React.useState<SuperfluidSDK.Framework | null>(null);

  const connectWallet = async () => {
    if (!isLoading) setLoading(true);

    onboard?.walletReset();

    const hasSelected = !lastWallet
      ? await onboard?.walletSelect()
      : await onboard?.walletSelect(lastWallet);
    if (!hasSelected) {
      setLoading(false);
      return;
    }

    const hasChecked = await onboard?.walletCheck();
    if (!hasChecked) {
      setLoading(false);
      return;
    }
  };

  const changeChain = async (id: number) => {
    setLoading(true);

    try {
      await web3?.givenProvider?.send("wallet_switchEthereumChain", [
        { chainId: `0x${id.toString(16)}` },
      ]);
    } catch (switchError) {
      const { code } = switchError as { code: number };

      // This error code indicates that the chain has not been added to MetaMask.
      if (code === 4902) {
        try {
          await web3?.givenProvider?.send("wallet_addEthereumChain", [
            `0x${id.toString(16)}`,
          ]);
        } catch (addError) {
          console.log(addError);
          setLoading(false);
        }
      } else {
        console.log(switchError);
        setLoading(false);
      }
    }
  };

  React.useEffect(() => {
    setLastWallet(localStorage.getItem("lastWallet"));
  }, []);

  React.useEffect(() => {
    if (typeof lastWallet === "undefined" || onboard) return;

    const o = Onboard({
      dappId: process.env.REACT_APP_BLOCKNATIVE_API_KEY,
      networkId: 1,
      darkMode: theme.palette.mode === "dark",
      walletCheck: [{ checkName: "connect" }],
      walletSelect: {
        wallets: [
          { walletName: "metamask", preferred: true },
          {
            walletName: "walletConnect",
            infuraKey: process.env.REACT_APP_INFURA_API_KEY,
            preferred: true,
          },
          { walletName: "opera" },
        ],
      },
      subscriptions: {
        wallet: async (wallet) => {
          if (!wallet.provider) return;

          const w3 = new Web3(wallet.provider);
          const ua = (await w3.eth.getAccounts())[0];
          const cid = await w3.eth.net.getId();
          const s = new SuperfluidSDK.Framework({
            web3: w3,
            additionalContracts: ["UUPSProxiable"],
          });
          await s.initialize();

          setWeb3(w3);
          setUserAddress(ua);
          setChainId(cid);
          setSf(s);

          if (wallet.name) {
            localStorage.setItem("lastWallet", wallet.name);
            setLastWallet(lastWallet);
          }
        },
        address: (newAddress) => {
          if (newAddress?.length && userAddress !== newAddress)
            setUserAddress(newAddress);
        },
        network: async (newChainId) => {
          if (newChainId && chainId !== newChainId) setChainId(newChainId);
        },
      },
    });

    setOnboard(o);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastWallet]);

  React.useEffect(() => {
    if (onboard) connectWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onboard]);

  React.useEffect(() => {
    if (userAddress && chainId) setLoading(false);
  }, [userAddress, chainId]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        web3,
        userAddress,
        chainId,
        sf,
        changeChain,
        connectWallet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
