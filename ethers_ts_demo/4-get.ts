import { ethers } from "ethers";
import { TBAccountParams } from "@tokenbound/sdk/dist/src/TokenboundClient";
import client, { wallet, provider, tokenBoundAccount, displayBalance } from "./client";
import { CONSTANTS } from "./constants"
const { NFT_CONTRACT, NFT_ID } = CONSTANTS;
(async () => {
 
  // const nft = await client.getNFT({
  //   accountAddress: tokenBoundAccount,
  // })
   
  // const { tokenContract, tokenId, chainId } = nft
   
  // console.log({ tokenContract, tokenId, chainId },nft)
  const amount = ethers.utils.parseEther("0.001");
  const preparedCall = await client.prepareExecuteCall({
    account: tokenBoundAccount,
    to: wallet.address as TBAccountParams["tokenContract"],
    value: BigInt(amount.toString()),
    data: "",
  })
   
  console.log(preparedCall) //...
})()