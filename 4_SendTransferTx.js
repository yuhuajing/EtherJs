import {ethers} from"ethers";
const provider = new ethers.JsonRpcProvider(`https://goerli.infura.io/v3/d7b27eea18a54fb389c2562ba19f8e36`);
// random wallet address
// const walletrandom = ethers.Wallet.createRandom()
// const mnemonic =walletrandom.mnemonic.phrase
// const prikey = walletrandom.privateKey

// console.log(`随机钱包地址:${walletrandom.address}`)
// console.log(`助记词: ${mnemonic}`)
// console.log(`私钥:${prikey}`)

// wallet address imported from private key
const walletprovite = new ethers.Wallet("797391c7bd2e156e52329ceb6471496798e0c125ef35c4c3393329bd2a64f3f5",provider)
console.log(`私钥钱包地址:${walletprovite.address}`)
//wallet address imported from mnemonic
// const walletmnemonic = ethers.Wallet.fromPhrase(mnemonic)
// console.log(`助记词钱包地址:${walletmnemonic.address}`)

// const txCount1 = await provider.getTransactionCount(walletrandom.address)
// const txCount2 = await provider.getTransactionCount(walletprovite.address)
// console.log(`钱包1发送交易次数: ${txCount1}`)
// console.log(`钱包2发送交易次数: ${txCount2}`)

console.log(`私钥钱包余额: ${ethers.formatEther(await  provider.getBalance(walletprovite.address))}`)
const tx = {
    to: "0x156b6c24e78FEDe687950Ba52a0b6B15a2c0aE11",
    value: ethers.parseEther("0.0002")
}

const receipt = await walletprovite.sendTransaction(tx)
await receipt.wait()
console.log(receipt)
console.log(`私钥钱包余额: ${ethers.formatEther(await  provider.getBalance(walletprovite.address))}`)
console.log(`私钥钱包余额: ${ethers.formatEther(await  provider.getBalance("0x156b6c24e78FEDe687950Ba52a0b6B15a2c0aE11"))}`)

/**
 私钥钱包地址:0x6593B47be3F4Bd1154c2faFb8Ad4aC4EFddD618f
私钥钱包余额: 0.001
TransactionResponse {
  provider: JsonRpcProvider {},
  blockNumber: null,
  blockHash: null,
  index: undefined,
  hash: '0x1480a33c28ead5ec49d590c1e29a925bd246ab0eb36dd4c75ba1fb23f9372201',
  type: 2,
  to: '0x156b6c24e78FEDe687950Ba52a0b6B15a2c0aE11',
  from: '0x6593B47be3F4Bd1154c2faFb8Ad4aC4EFddD618f',
  nonce: 0,
  gasLimit: 21000n,
  gasPrice: undefined,
  maxPriorityFeePerGas: 1000000000n,
  maxFeePerGas: 1000000074n,
  data: '0x',
  value: 200000000000000n,
  chainId: 5n,
  signature: Signature { r: "0xb056776ddf80a0d5e94249766d1a48616702f58847aaa691c95ed352848f75c6", s: "0x3c7ac967bd43c6df397654183865f324987141438cd389a3c2b6d1b1c62a5468", yParity: 1, networkV: null },
  accessList: []
}
私钥钱包余额: 0.000778999999139
私钥钱包余额: 0.0002
 **/