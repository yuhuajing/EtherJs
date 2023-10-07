import { ethers } from "ethers";
import { wallet, provider, tokenBoundAccount, displayBalance } from "./client";

// transfer eth from Wallet -> TBA

(async () => {
  console.log(`sender:`, wallet.address);
  await displayBalance(wallet.address);

  const amount = ethers.utils.parseEther("0.01");
  console.log(`sending ${ethers.utils.formatEther(amount)} ETH from ${wallet.address} to ${tokenBoundAccount}`);

  await wallet.sendTransaction({
    to: tokenBoundAccount,
    value: amount
  })
  await displayBalance(wallet.address);
  await displayBalance(tokenBoundAccount);
})()