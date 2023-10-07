/**
const tx = await contract.METHOD_NAME(args,{overrides})
await tx.wait() 
其中METHOD_NAME为调用的函数名，args为函数参数，[, overrides]是可以选择传入的数据，包括：

gasPrice：gas价格
gasLimit：gas上限
value：调用时传入的ether（单位是wei）
nonce：nonce
**/
import {ethers} from"ethers";
const provider = new ethers.JsonRpcProvider(`https://goerli.infura.io/v3/d7b27eea18a54fb389c2562ba19f8e36`);
const walletprovite = new ethers.Wallet("797391c7bd2e156e52329ceb6471496798e0c125ef35c4c3393329bd2a64f3f5",provider)
console.log(`私钥钱包地址:${walletprovite.address}`)
const abiWETH = [
    "function balanceOf(address) public view returns(uint)",
    "function deposit() public payable",
    "function transfer(address, uint) public returns (bool)",
    "function withdraw(uint) public",
];
// WETH合约地址（Goerli测试网）
const addressWETH = '0x0B1ba0af832d7C05fD64161E0Db78E85978E8082' // WETH Contract

// 声明可写合约
const contractWETH = new ethers.Contract(addressWETH, abiWETH, walletprovite)
const balanceWETH = await contractWETH.balanceOf(walletprovite.address)
console.log(`存款前WETH持仓: ${ethers.formatEther(balanceWETH)}\n`)

const tx = await contractWETH.deposit({value:ethers.parseEther("0.0001")})

await tx.wait()

console.log(tx)

const balanWETH = await contractWETH.balanceOf(walletprovite.address)
console.log(`存款后WETH持仓: ${ethers.formatEther(balanWETH)}\n`)
/**
 私钥钱包地址:0x6593B47be3F4Bd1154c2faFb8Ad4aC4EFddD618f
存款前WETH持仓: 0.0
ContractTransactionResponse {
  provider: JsonRpcProvider {},
  blockNumber: null,
  blockHash: null,
  index: undefined,
  hash: '0x525cca1232218ab7cbee2301e2c611eb33d613e4b30ee2fff2869509addb8c85',
  type: 2,
  to: '0x0B1ba0af832d7C05fD64161E0Db78E85978E8082',
  from: '0x6593B47be3F4Bd1154c2faFb8Ad4aC4EFddD618f',
  nonce: 1,
  gasLimit: 45006n,
  gasPrice: undefined,
  maxPriorityFeePerGas: 1000000000n,
  maxFeePerGas: 1000000128n,
  data: '0xd0e30db0',
  value: 100000000000000n,
  chainId: 5n,
  signature: Signature { r: "0xfa099bd97bd10c526276885ad5165a16f45aae0281cc43694b25af673961641b", s: "0x46f38ff032b228c1df504b9f8626f8e2dbef3df52bfabcb1ddebeba162d07022", yParity: 0, networkV: null },
  accessList: []
}
存款后WETH持仓: 0.0001
 * **/

const txTransfer = await contractWETH.transfer("0x156b6c24e78FEDe687950Ba52a0b6B15a2c0aE11",ethers.parseEther("0.0001"))

await txTransfer.wait()

console.log(txTransfer)

const balWETH = await contractWETH.balanceOf(walletprovite.address)
console.log(`转账后转账者WETH持仓: ${ethers.formatEther(balWETH)}\n`)
const balreceWETH = await contractWETH.balanceOf("0x156b6c24e78FEDe687950Ba52a0b6B15a2c0aE11")
console.log(`转账后接收者WETH持仓: ${ethers.formatEther(balreceWETH)}\n`)

/**
ContractTransactionResponse {
  provider: JsonRpcProvider {},
  blockNumber: null,
  blockHash: null,
  index: undefined,
  hash: '0x888bb1e381e1dbdbba2f90d549e7d87eca181293bff928d0374816bd768db08e',
  type: 2,
  to: '0x0B1ba0af832d7C05fD64161E0Db78E85978E8082',
  from: '0x6593B47be3F4Bd1154c2faFb8Ad4aC4EFddD618f',
  nonce: 2,
  gasLimit: 51416n,
  gasPrice: undefined,
  maxPriorityFeePerGas: 1000000000n,
  maxFeePerGas: 1000000196n,
  data: '0xa9059cbb000000000000000000000000156b6c24e78fede687950ba52a0b6b15a2c0ae1100000000000000000000000000000000000000000000000000005af3107a4000',
  value: 0n,
  chainId: 5n,
  signature: Signature { r: "0x21682dfba4c625fc2ed07fe946fd05530177528ada50b778792be17e7a514df6", s: "0x0c070df1b6f35e83a71a50c587b0006063438c8f0323d38276686f0e20591d20", yParity: 0, networkV: null },
  accessList: []
}
转账后转账者WETH持仓: 0.0

转账后接收者WETH持仓: 0.0001
**/