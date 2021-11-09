import erc20ABI from "../ABIs/ERC20ABI.json";
import { LaunchSuperTokenOptions } from "./models";

export default async function launchSuperToken({
  web3,
  sf,
  gasPrice,
  tokenAddress,
  amount,
}: LaunchSuperTokenOptions): Promise<any> {
  const account = (await web3.eth.getAccounts())[0];

  const contractParams = {
    from: account,
    gas: 12000000,
    gasPrice: (gasPrice * 1000000000).toString(),
  };

  const tokenInfo = await (sf.contracts as any).TokenInfo.at(tokenAddress);
  const tokenInfoName = await tokenInfo.name.call();
  const tokenInfoSymbol = await tokenInfo.symbol.call();
  const tokenInfoDecimals = await tokenInfo.decimals.call();
  const superTokenName = `${tokenInfoName}x`;
  const superTokenSymbol = `${tokenInfoSymbol}x`;

  console.log(
    JSON.stringify(
      {
        tokenAddress,
        tokenInfo: {
          tokenInfoName,
          tokenInfoSymbol,
          tokenInfoDecimals,
        },
      },
      null,
      2,
    ),
  );

  const superToken = await sf.createERC20Wrapper(tokenInfo, {
    superTokenName,
    superTokenSymbol,
  });

  const underlyingTokenContract = new web3.eth.Contract(
    erc20ABI as any,
    tokenAddress,
    contractParams,
  );

  await underlyingTokenContract.methods
    .approve(superToken.address, amount)
    .send();

  await superToken.upgrade(amount);

  return superToken;
}
