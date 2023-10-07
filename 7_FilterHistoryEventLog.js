import {ethers} from"ethers";
const provider = new ethers.JsonRpcProvider(`https://cloudflare-eth.com`);

const abiWETH = [
    "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)"
];
//合约地址（以太坊主网）
const addressWETH = '0xff2B4721F997c242fF406a626f17df083Bd2C568'

const contractWETH = new ethers.Contract(addressWETH, abiWETH, provider)

console.log(`打印事件详情:`);
// ueryFilter()包含3个参数，分别是事件名（必填），起始区块（选填），和结束区块（选填,不填写的话，就解析到最新区快）
const transferEvents = await contractWETH.queryFilter('Transfer', 18180711, 18180712)

for (const transferEvent of transferEvents) {
    console.log("\n 解析事件：")
   // console.log(transferEvent)
  //  const amount = ethers.formatUnits(ethers.toBigInt(transferEvent.args["amount"]), "ether");
    const tokenid = transferEvent.args["tokenId"]
    console.log(`地址 ${transferEvent.args["from"]} 转移TokenID ${tokenid}  到地址 ${transferEvent.args["to"]}`)
}
