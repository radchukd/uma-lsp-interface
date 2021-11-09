import { RegisterOptions } from "react-hook-form";
import Web3 from "web3";

import SuperfluidSDK from "@superfluid-finance/js-sdk";

export type FormField<Opts> = {
  name: keyof Opts;
  description: string;
  rules: RegisterOptions;
  type?: string;
  options?: Array<string>;
};

export type FPL =
  | "BinaryOption"
  | "CappedYieldDollar"
  | "CoveredCall"
  | "Linear"
  | "RangeBond"
  | "SimpleSuccessToken"
  | "SuccessToken";

export type FPLOptions = {
  fpl: FPL; // Name of the financial product library type your contract will use to calculate the payment at expiry.
  basePercentage: string; // The percentage of collateral per pair used as the floor.
  lowerBound: string; // Lower bound of a price range for certain financial product libraries.
  upperBound: string; // Upper bound of a price range for certain financial product libraries.
};

export type LSPOptions = {
  // Mandatory
  pairName: string; // The desired name of the token pair.
  expirationTimestamp: Date; // Timestamp that the contract will expire at.
  collateralPerPair: string; // How many units of collateral are required to mint one pair of synthetic tokens.
  priceIdentifier: string; // The approved price identifier to be used.
  longSynthName: string; // The full-length name of the long token.
  longSynthSymbol: string; // Long token symbol.
  shortSynthName: string; // The full-length name of the short token.
  shortSynthSymbol: string; // Short token symbol.
  collateralToken: string; // Approved collateral currency to be used.
  // Optional
  customAncillaryData: string; // Custom ancillary data to be passed along with the price request
  prepaidProposerReward: string; // Proposal reward to be forwarded to the created contract to be used to incentivize price proposals.
  optimisticOracleLivenessTime: string; // Custom liveness window for disputing optimistic oracle price proposals in seconds.
  optimisticOracleProposerBond: string; // Additional bond proposer must post with the optimistic oracle.
};

export type LaunchOptions = {
  web3: Web3;
  simulate: boolean; // Boolean telling if the script should only simulate the transactions without sending them to the network.
  gasPrice: number; // Gas price to use in GWEI.
  lspOptions: LSPOptions;
  fplOptions: FPLOptions;
};

export type FPLParams = {
  address: string;
  abi: Array<any>;
  contractParams: Array<any>;
};

export type LaunchData = {
  createLongShortPair: {
    address: string | undefined;
    transactionHash: string | undefined;
  };
  setLongShortPairParameters: {
    transactionHash: string | undefined;
  };
};

export type CreatedLSP = {
  longShortPair: string;
  longToken: string;
  shortToken: string;
};

export type MintLSPPairOptions = {
  web3: Web3;
  gasPrice: number;
  amount: string;
  lspAddress: string;
};

export type LaunchSuperTokenOptions = {
  web3: Web3;
  sf: SuperfluidSDK.Framework;
  gasPrice: number;
  tokenAddress: string;
  amount: string;
};

export type DistributeOptions = {
  token: string;
  recipient: string;
  flowRate: string;
};
