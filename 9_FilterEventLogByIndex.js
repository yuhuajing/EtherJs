import {ethers} from"ethers";
const provider = new ethers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/oKmOQKbneVkxgHZfibs-iFhIlIAl6HDN`);

const abiWETH = [
    "event Transfer(address indexed from, address indexed to, uint value)" //topic =  keccak256("Transfer(address,address,uint256)")
   ];
// USDT 合约地址
const addressWETH = '0xdAC17F958D2ee523a2206206994597C13D831ec7' // USDT Contract

// 声明只读合约
const contract  = new ethers.Contract(addressWETH, abiWETH, provider)


//parse transfer tx where from == 0xf89d7b9c864f589bbF53a82105107622B35EaA40
const filter = contract.filters.Transfer("0xf89d7b9c864f589bbF53a82105107622B35EaA40")

//parse transfer tx where to == 0x28C6c06298d514Db089934071355E5743bf21d60
// filter = contract.filters.Transfer(null,"0x28C6c06298d514Db089934071355E5743bf21d60")


const transferEvents = await contract.queryFilter(filter, 18019758,18019764)

for (const transferEvent of transferEvents) {
    console.log("\n 解析事件：")
    
  //  const amount = ethers.formatUnits(ethers.toBigInt(transferEvent.args["amount"]), "ether");
  const txhash = transferEvent.log["blockNumber"]
    const amount = transferEvent.args["amount"]
    console.log(`地址 ${transferEvent.args["from"]} 转账${amount} * 10^{18} WETH 到地址 ${transferEvent.args["to"]}`)
}
