import { ethers } from 'ethers';
//同一份助记词可以遍历不同参数，生成不同的地址。但是所有的地址都可以通过该助记词重新生成
// // 生成随机助记词
// const mnemonic = ethers.Mnemonic.entropyToPhrase(ethers.randomBytes(32))

// console.log(`助记词： ${mnemonic}`)

const mnemonicStr = "raven want library tilt gift anchor elegant corn craft galaxy forest hospital thunder shine nut ankle coast give west banner must hard grit ethics"
// 创建HD钱包
const hdNode = ethers.HDNodeWallet.fromPhrase(mnemonicStr)//mnemonic)
console.log(hdNode.address);
//console.log(hdNode); 
/**
 * HDNodeWallet {
  provider: null,
  address: '0x2856476009317e441F29465d17Fb5e95b0042084',
  publicKey: '0x039e88ccd169e5be226230650efa82769db5143b65a3a53ab0cbf4e606c9ca6528',
  fingerprint: '0xd6f61eac',
  parentFingerprint: '0xbc13d010',
  mnemonic: Mnemonic {
    phrase: 'receive flight nurse strong analyst true shop before better around uncover abuse senior cart device drop divide roast spell kind leaf snack slim suffer',
    password: '',
    wordlist: LangEn { locale: 'en' },
    entropy: '0xb38b1e5e6b9085d2b1a8a1158187b2809c3a460f2a1b3ff76344bd47eb9a32f6'
  },
  chainCode: '0xd455141a6f8f88f52d397af9e8fc000925e0120ade4b57d2c22882e42479c806',
  path: "m/44'/60'/0'/0/0",
  index: 0,
  depth: 5
}
 */
// 2. 通过HD钱包派生20个钱包
console.log("\n2. 通过HD钱包派生20个钱包")
const numWallet = 2
// 派生路径：m / purpose' / coin_type' / account' / change / address_index
// 我们只需要切换最后一位address_index，就可以从hdNode派生出新钱包
let basePath = "m/44'/60'/0'/0";
let wallets = [];
for (let i = 0; i < numWallet; i++) {
    let hdNodeNew = hdNode.derivePath(basePath + "/" + i);
    let walletNew = new ethers.Wallet(hdNodeNew.privateKey);
    console.log(`第${i + 1}个钱包私钥： ${hdNodeNew.privateKey}`)
    console.log(`第${i + 1}个钱包地址： ${walletNew.address}`)
    wallets.push(walletNew);
}


// // 3. 保存钱包（加密json）
// console.log("\n3. 保存钱包(加密json)")
// const wallet = ethers.Wallet.fromPhrase(mnemonic)
// console.log("通过助记词创建钱包：")
// console.log(wallet)
// // 加密json用的密码，可以更改成别的
// const pwd = "password"
// const json = await wallet.encrypt(pwd)
// console.log("钱包的加密json:")
// console.log(json)

// // 4. 从加密json读取钱包
// const wallet2 = await ethers.Wallet.fromEncryptedJson(json, pwd);
// console.log("\n4. 从加密json读取钱包:")
// console.log(wallet2)


