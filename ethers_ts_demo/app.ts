import { ethers } from "ethers";
import { provider } from "./client";

(async () => {
  let start = new Date().getTime()
  let code = await provider.getCode("0xDEE9bA27F961446D90E00b87BDcEfe79142CA760")
  console.log("code:",code)
  let end = new Date().getTime()
  console.log((end - start)/1000 + " S")
})()