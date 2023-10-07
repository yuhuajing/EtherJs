import { ethers } from 'ethers';

const Ethereum_Mainnet_URL = "https://eth-mainnet.g.alchemy.com/v2/oKmOQKbneVkxgHZfibs-iFhIlIAl6HDN";
const provider = new ethers.JsonRpcProvider(Ethereum_Mainnet_URL);
// const private_Key = "0x227dbb8586117d55284e26620bc76534dfbd2394be34cf4a09cb775d593b6f2b";
// const wallet = new ethers.Wallet(private_Key, provider);

const abiNFTBAYC = ["function name() view returns (string)",
"function symbol() view returns (string)",
"function supportsInterface(bytes4) public view returns(bool)",];

const addressDAI = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
const contractDAI = new ethers.Contract(addressDAI, abiNFTBAYC, provider);

const isNFT = await contractDAI.supportsInterface("0x80ac58cd")
console.log(`${isNFT}`)
