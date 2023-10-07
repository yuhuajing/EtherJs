import {ethers} from"ethers";
const provider = new ethers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/oKmOQKbneVkxgHZfibs-iFhIlIAl6HDN`);

const abiWETH = [
    "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)"
];
//合约地址（以太坊主网）
const addressWETH = '0xd564C25B760cb278a55bDD98831f4ff4B6C97B38'

const contract  = new ethers.Contract(addressWETH, abiWETH, provider)

contract.on("Transfer", (from, to, tokenId, event) => {

    //console.log(event)
    console.log(event.log["blockNumber"])
   console.log(`${ from } => ${ to }: ${ tokenId }`);
  });
