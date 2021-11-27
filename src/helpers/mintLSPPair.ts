import { getLongShortPairAbi } from "@uma/contracts-frontend";

import erc20ABI from "../ABIs/ERC20ABI.json";
import { MintLSPPairOptions } from "./models";

export default async function mintLSPPair({
  web3,
  gasPrice,
  amount,
  lspAddress,
}: MintLSPPairOptions): Promise<any> {
  const { toBN, toWei } = web3.utils;

  const account = (await web3.eth.getAccounts())[0];

  const contractParams = {
    from: account,
    gas: 12000000,
    gasPrice: (Number(gasPrice) * 1000000000).toString(),
  };

  const lspContract = new web3.eth.Contract(
    getLongShortPairAbi(),
    lspAddress,
    contractParams,
  );

  const collateralToken = await lspContract.methods.collateralToken().call();

  const collateralTokenContract = new web3.eth.Contract(
    erc20ABI as any,
    collateralToken,
    contractParams,
  );

  const collateralPerPair = await (lspContract.methods as any)
    .collateralPerPair()
    .call();

  const mintAmount = toBN(toWei(amount))
    .mul(toBN(10).pow(toBN(18)))
    .div(toBN(collateralPerPair))
    .toString();

  await collateralTokenContract.methods.approve(lspAddress, mintAmount).send();

  const receipt = await (lspContract.methods as any).create(mintAmount).send();

  return receipt;
}
