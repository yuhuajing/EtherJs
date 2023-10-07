import {ethers} from"ethers";
const provider = new ethers.JsonRpcProvider(`https://cloudflare-eth.com`);
const main = async () => {
    // const balance = await provider.getBalance('vitalik.eth');
    // console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} WEI`);

    // const network = await provider.getNetwork();
    // console.log(network);

    // const feeData = await provider.getFeeData();
    // console.log(feeData);

    const bnumber =  await provider.getBlockNumber();
    console.log(bnumber);

    // const txnumber =  await provider.getTransactionCount("0x0d76C9214439502A958976273eF870549EE89Fb8")
    // console.log(txnumber);

    // const binfo =  await provider.getBlock(bnumber)
    // console.log(binfo);
    const scCode =  await provider.getCode("0xd19d4B5d358258f05D7B411E21A1460D11B0876F",bnumber)
    console.log(scCode);
    const txcountForAddrOnBlockNumber =  await provider.getTransactionCount("0xd19d4B5d358258f05D7B411E21A1460D11B0876F",bnumber)
    console.log(txcountForAddrOnBlockNumber);

}
main()