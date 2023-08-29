import {ethers} from"ethers";
const provider = new ethers.JsonRpcProvider(`https://goerli.infura.io/v3/d7b27eea18a54fb389c2562ba19f8e36`);

const abiWETH = [
    "event Transfer(address indexed from, address indexed to, uint amount)"
];
// WETH合约地址（Goerli测试网）
const addressWETH = '0x0B1ba0af832d7C05fD64161E0Db78E85978E8082' // WETH Contract

// 声明只读合约
const contractWETH = new ethers.Contract(addressWETH, abiWETH, provider)

//const block = await provider.getBlockNumber()
//console.log(`当前区块高度: ${block}`);
console.log(`打印事件详情:`);
// ueryFilter()包含3个参数，分别是事件名（必填），起始区块（选填），和结束区块（选填）
const transferEvents = await contractWETH.queryFilter('Transfer', 9579450)//, 9600209)

for (const transferEvent of transferEvents) {
    console.log("\n 解析事件：")
    console.log(transferEvent)
  //  const amount = ethers.formatUnits(ethers.toBigInt(transferEvent.args["amount"]), "ether");
    const amount = transferEvent.args["amount"]
    console.log(`地址 ${transferEvent.args["from"]} 转账${amount} * 10^{18} WETH 到地址 ${transferEvent.args["to"]}`)
}
