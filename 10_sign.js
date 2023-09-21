import {ethers} from"ethers";

const main = async () => {
    const provider = new ethers.JsonRpcProvider(`https://cloudflare-eth.com`);
    const signer = new ethers.Wallet("797391c7bd2e156e52329ceb6471496798e0c125ef35c4c3393329bd2a64f3f5",provider)
    console.log(`私钥钱包地址:${signer.address}`)
    const message = "Hello, World!";

    const rawSig = await signer.signMessage(message);
    console.log(rawSig);
    
    //sig = Signature.from(rawSig);
    //const encodedMsg =  ethers.solidityPackedKeccak256(["string"], [msg]);
    //const signature = await walletprovite.signMessage(encodedMsg);
    //console.log(signature);

    // const txcountForAddrOnBlockNumber =  await provider.getTransactionCount("0xd19d4B5d358258f05D7B411E21A1460D11B0876F",bnumber)
    // console.log(txcountForAddrOnBlockNumber);

}
main()