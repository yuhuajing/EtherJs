import { ethers } from "ethers";


(async () => {
  const message = "Hello, World!";
  const privateKey = "0x0123456789012345678901234567890123456789012345678901234567890123";
  const wallet = new ethers.Wallet(privateKey);
  const signature = await wallet.signMessage(message);
  console.log("address",wallet.address);
  console.log("publicKey",wallet.publicKey);
  console.log("signature",signature);

  const recoveredAddress = await ethers.utils.verifyMessage(message, signature);
  console.log("recoveredAddress:", recoveredAddress);

})()