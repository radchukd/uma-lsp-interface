import {
  getLongShortPairCreatorAbi,
  getLongShortPairCreatorAddress,
} from "@uma/contracts-frontend";
import Web3 from "web3";
import { CreatedLSP } from "./models";

export default async function getCreatedLSPs(
  web3: Web3,
): Promise<Array<CreatedLSP>> {
  const account = (await web3.eth.getAccounts())[0];
  const chainId = await web3.eth.net.getId();

  const lspCreator = new web3.eth.Contract(
    getLongShortPairCreatorAbi(),
    getLongShortPairCreatorAddress(chainId),
  );

  const lspEvents = await lspCreator.getPastEvents("CreatedLongShortPair", {
    filter: {
      deployerAddress: account,
    },
    fromBlock: 0,
    toBlock: "latest",
  });

  return lspEvents.map(
    ({ returnValues: { longShortPair, longToken, shortToken } }) => ({
      longShortPair,
      longToken,
      shortToken,
    }),
  );
}
