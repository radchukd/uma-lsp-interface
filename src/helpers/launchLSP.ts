import {
  getBinaryOptionLongShortPairFinancialProductLibraryAbi,
  getBinaryOptionLongShortPairFinancialProductLibraryAddress,
  getCappedYieldDollarLongShortPairFinancialProductLibraryAbi,
  getCappedYieldDollarLongShortPairFinancialProductLibraryAddress,
  getCoveredCallLongShortPairFinancialProductLibraryAbi,
  getCoveredCallLongShortPairFinancialProductLibraryAddress,
  getLinearLongShortPairFinancialProductLibraryAbi,
  getLinearLongShortPairFinancialProductLibraryAddress,
  getLongShortPairCreatorAddress,
  getRangeBondLongShortPairFinancialProductLibraryAbi,
  getRangeBondLongShortPairFinancialProductLibraryAddress,
  getSimpleSuccessTokenLongShortPairFinancialProductLibraryAbi,
  getSimpleSuccessTokenLongShortPairFinancialProductLibraryAddress,
  getStoreAbi,
  getStoreAddress,
  getSuccessTokenLongShortPairFinancialProductLibraryAbi,
  getSuccessTokenLongShortPairFinancialProductLibraryAddress,
} from "@uma/contracts-frontend";

import lspCreatorABI from "../ABIs/LongShortPairCreatorABI.json";
import { FPL, FPLParams, LaunchData, LaunchOptions } from "./models";
import { parseCustomAncillaryData } from "./utils";

const getFPLParams = (
  fpl: FPL,
  basePercentage: string,
  lowerBound: string,
  upperBound: string,
  chainId: number,
): FPLParams => {
  switch (fpl) {
    case "BinaryOption":
      return {
        address:
          getBinaryOptionLongShortPairFinancialProductLibraryAddress(chainId),
        abi: getBinaryOptionLongShortPairFinancialProductLibraryAbi(),
        contractParams: [lowerBound],
      };
    case "CappedYieldDollar":
      return {
        address:
          getCappedYieldDollarLongShortPairFinancialProductLibraryAddress(
            chainId,
          ),
        abi: getCappedYieldDollarLongShortPairFinancialProductLibraryAbi(),
        contractParams: [lowerBound],
      };
    case "CoveredCall":
      return {
        address:
          getCoveredCallLongShortPairFinancialProductLibraryAddress(chainId),
        abi: getCoveredCallLongShortPairFinancialProductLibraryAbi(),
        contractParams: [lowerBound],
      };
    case "SimpleSuccessToken":
      return {
        address:
          getSimpleSuccessTokenLongShortPairFinancialProductLibraryAddress(
            chainId,
          ),
        abi: getSimpleSuccessTokenLongShortPairFinancialProductLibraryAbi(),
        contractParams: [lowerBound],
      };
    case "RangeBond":
      return {
        address:
          getRangeBondLongShortPairFinancialProductLibraryAddress(chainId),
        abi: getRangeBondLongShortPairFinancialProductLibraryAbi(),
        contractParams: [upperBound, lowerBound],
      };
    case "Linear":
      return {
        address: getLinearLongShortPairFinancialProductLibraryAddress(chainId),
        abi: getLinearLongShortPairFinancialProductLibraryAbi(),
        contractParams: [upperBound, lowerBound],
      };
    case "SuccessToken":
      return {
        address:
          getSuccessTokenLongShortPairFinancialProductLibraryAddress(chainId),
        abi: getSuccessTokenLongShortPairFinancialProductLibraryAbi(),
        contractParams: [lowerBound, basePercentage],
      };
  }
};

export default async function launchLSP({
  web3,
  simulate,
  gasPrice,
  pairName,
  expirationTimestamp,
  collateralPerPair,
  priceIdentifier,
  longSynthName,
  longSynthSymbol,
  shortSynthName,
  shortSynthSymbol,
  collateralToken,
  customAncillaryData,
  prepaidProposerReward,
  optimisticOracleLivenessTime,
  optimisticOracleProposerBond,
  fpl,
  basePercentage,
  lowerBound,
  upperBound,
}: LaunchOptions): Promise<LaunchData> {
  const { utf8ToHex, padRight, toWei } = web3.utils;

  const account = (await web3.eth.getAccounts())[0];
  const chainId = await web3.eth.net.getId();

  // Get the final fee for the collateral type to use as default proposer bond.
  const proposerBond =
    (optimisticOracleProposerBond
      ? toWei(optimisticOracleProposerBond)
      : (
          await new web3.eth.Contract(
            getStoreAbi(),
            getStoreAddress(chainId),
          ).methods
            .computeFinalFee(collateralToken)
            .call()
        )[0]) || "0";

  const fplParams = getFPLParams(
    fpl,
    basePercentage,
    lowerBound,
    upperBound,
    chainId,
  );
  const fplContractParamsInWei = fplParams.contractParams.map((param) =>
    toWei(param),
  );

  const lspParams = {
    /* string  */ pairName,
    /* uint64  */ expirationTimestamp: Math.ceil(
      expirationTimestamp.getTime() / 1000,
    ).toString(),
    /* uint256 */ collateralPerPair: toWei(collateralPerPair),
    /* bytes32 */ priceIdentifier: padRight(utf8ToHex(priceIdentifier), 64),
    /* string  */ longSynthName,
    /* string  */ longSynthSymbol,
    /* string  */ shortSynthName,
    /* string  */ shortSynthSymbol,
    /* address */ collateralToken,
    /* address */ financialProductLibrary: fplParams.address,
    /* bytes   */ customAncillaryData: utf8ToHex(
      parseCustomAncillaryData(customAncillaryData),
    ),
    /* uint256 */ prepaidProposerReward: prepaidProposerReward.length
      ? toWei(prepaidProposerReward)
      : "0",
    /* uint256 */ optimisticOracleLivenessTime: optimisticOracleLivenessTime
      ? optimisticOracleLivenessTime.toString()
      : "7200",
    /* uint256 */ optimisticOracleProposerBond: proposerBond,
  };

  const contractParams = {
    from: account,
    gas: 12000000,
    gasPrice: (Number(gasPrice) * 1000000000).toString(),
  };

  console.log(
    JSON.stringify(
      {
        simulate,
        chainId,
        lspParams,
        fplContractParamsInWei,
        contractParams,
      },
      null,
      2,
    ),
  );

  const launchData = {
    createLongShortPair: { address: "", transactionHash: "" },
    setLongShortPairParameters: { transactionHash: "" },
  };

  const lspCreator = new web3.eth.Contract(
    lspCreatorABI as any,
    getLongShortPairCreatorAddress(chainId),
    contractParams,
  );

  const address = await lspCreator.methods
    .createLongShortPair(lspParams)
    .call();
  launchData.createLongShortPair.address = address;

  if (!simulate) {
    const { transactionHash } = await lspCreator.methods
      .createLongShortPair(lspParams)
      .send();
    launchData.createLongShortPair.transactionHash = transactionHash;
  }

  const deployedFPL = new web3.eth.Contract(
    fplParams.abi,
    fplParams.address,
    contractParams,
  );

  if (!simulate) {
    const { transactionHash } = await deployedFPL.methods
      .setLongShortPairParameters(address, ...fplContractParamsInWei)
      .send();
    launchData.setLongShortPairParameters.transactionHash = transactionHash;
  }

  console.log(launchData);

  return launchData;
}
