import {ethers} from"ethers";
const provider = new ethers.JsonRpcProvider(`https://goerli.infura.io/v3/d7b27eea18a54fb389c2562ba19f8e36`);
const walletprovite = new ethers.Wallet("797391c7bd2e156e52329ceb6471496798e0c125ef35c4c3393329bd2a64f3f5",provider)
console.log(`私钥钱包地址:${walletprovite.address}`)
const abi = [
    "function retrieve() public view returns(uint256)",
    "function store(uint256) public",
];
const bytecode = "608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632e64cec11461003b5780636057361d14610059575b600080fd5b610043610075565b60405161005091906100a1565b60405180910390f35b610073600480360381019061006e91906100ed565b61007e565b005b60008054905090565b8060008190555050565b6000819050919050565b61009b81610088565b82525050565b60006020820190506100b66000830184610092565b92915050565b600080fd5b6100ca81610088565b81146100d557600080fd5b50565b6000813590506100e7816100c1565b92915050565b600060208284031215610103576101026100bc565b5b6000610111848285016100d8565b9150509291505056fea2646970667358221220322c78243e61b783558509c9cc22cb8493dde6925aa5e89a08cdf6e22f279ef164736f6c63430008120033"

const factorySC = new ethers.ContractFactory(abi,bytecode,walletprovite);
console.log("\n等待合约部署上链")
const contract = await factorySC.deploy(); //deploy(unlockTime, { value: lockedAmount })  如果构造函数需要参数的话，需要在deploy中提供
console.log(`合约地址: ${contract.target}`)
//console.log(`合约地址: ${await contract.getAddress()}`);
//console.log("部署合约的交易详情")
//console.log(await contract.deploymentTransaction())
console.log("合约已上链")

const contractRW = new ethers.Contract(contract.target, abi, walletprovite)
console.log(`数值: ${await contractRW.retrieve()}`)

console.log("等待交易上链")
let tx = await contractRW.store(10000)
await tx.wait()
console.log(`store后数值: ${await contractRW.retrieve()}`)
