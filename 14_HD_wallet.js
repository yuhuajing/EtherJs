import { ethers } from 'ethers';

// 生成随机助记词
const mnemonic = ethers.Mnemonic.entropyToPhrase(ethers.randomBytes(32))

// 创建HD钱包
const hdNode = ethers.HDNodeWallet.fromPhrase(mnemonic)
console.log(hdNode.mnemonic.phrase);

