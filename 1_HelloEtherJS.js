import {ethers} from"ethers";
const provider = ethers.getDefaultProvider();
const main = async () => {
    const balance = await provider.getBalance('vitalik.eth');
    console.log(`ETH Balance of vitalik: ${balance} WEI`);
    const ethbal = ethers.formatEther(balance)
    console.log(`ETH Balance of vitalik: ${ethbal} ETH`);
}
main()