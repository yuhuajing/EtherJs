import { ethers } from 'ethers';

const Ethereum_Mainnet_URL = "https://eth-mainnet.g.alchemy.com/v2/oKmOQKbneVkxgHZfibs-iFhIlIAl6HDN";
const provider = new ethers.JsonRpcProvider(Ethereum_Mainnet_URL);
const private_Key = "0x227dbb8586117d55284e26620bc76534dfbd2394be34cf4a09cb775d593b6f2b";
const wallet = new ethers.Wallet(private_Key, provider);

const abiDAI = ["function balanceOf(address) public view returns(uint)",
    "function transfer(address, uint) public returns (bool)",];

const addressDAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const contractDAI = new ethers.Contract(addressDAI, abiDAI, provider);

const address = await wallet.getAddress()
console.log(`私钥钱包地址:${address}`)
console.log("\n1. 读取测试钱包的DAI余额")
const balanceDAI = await contractDAI.balanceOf(address)
console.log(`DAI持仓: ${ethers.formatEther(balanceDAI)}\n`)

// console.log("\n2.  用staticCall尝试调用transfer转账1 DAI, msg.sender为V神地址")
// // 发起交易
// const tx = await contractDAI.transfer.staticCall("vitalik.eth", ethers.parseEther("100"), {from: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"})
// console.log(`交易会成功吗？：`, tx) //true

// 发起交易
const ntx = await contractDAI.transfer.staticCall("vitalik.eth", ethers.parseEther("100"), {from: address})
console.log(`交易会成功吗？：`, ntx) //false