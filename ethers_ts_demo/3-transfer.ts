import { ethers } from "ethers";
import { TBAccountParams } from "@tokenbound/sdk/dist/src/TokenboundClient";
import client, { wallet, provider, tokenBoundAccount, displayBalance } from "./client";

// transfer eth from B -> A
(async () => {
  console.log(`wallet: ${wallet.address}`);
  await displayBalance(wallet.address);
  console.log(`TBA address: ${tokenBoundAccount}`)
  await displayBalance(tokenBoundAccount)

  const amount = ethers.utils.parseEther("0");
  console.log(`sending ${ethers.utils.formatEther(amount)} ETH from ${tokenBoundAccount} to ${wallet.address}`);

  // const executedCall = await client.executeCall({
  //   account: tokenBoundAccount,
  //   to: wallet.address as TBAccountParams["tokenContract"],
  //   value: BigInt(amount.toString()),
  //   data: "0x9e5d4c49000000000000000000000000e08d2d3d6dd1a3135cb842e8f4c8f64f86a2c65600000000000000000000000000000000000000000000000000038d7ea4c6800000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000",
  // });
  const executedCall = await wallet.sendTransaction({
    to: tokenBoundAccount,
    data:"0x9e5d4c49000000000000000000000000e08d2d3d6dd1a3135cb842e8f4c8f64f86a2c65600000000000000000000000000000000000000000000000000038d7ea4c6800000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000"
  })
  console.log("\n---\n", executedCall, "\n---\n");

  // await provider.waitForTransaction(executedCall);
  await displayBalance(wallet.address);
  await displayBalance(tokenBoundAccount);
})()