import {ethers} from"ethers";
const provider = new ethers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/oKmOQKbneVkxgHZfibs-iFhIlIAl6HDN`);

const abiWETH = [
    "event Transfer(address indexed from, address indexed to, uint value)" //topic =  keccak256("Transfer(address,address,uint256)")
    //"event Transfer(address indexed from, address indexed to, uint256 value)"
    //{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}
];
// USDT 合约地址
const addressWETH = '0xdAC17F958D2ee523a2206206994597C13D831ec7' // USDT Contract

// 声明只读合约
const contract  = new ethers.Contract(addressWETH, abiWETH, provider)

// contract.once('Transfer', (from, to, value)=>{
//     // 打印结果
//     console.log(
//       `${from} -> ${to} ${ethers.formatUnits(ethers.toBigInt(value),18)}`
//     )
//   })

contract.on("Transfer", (from, to, value, event) => {

    //console.log(event)
    console.log(event.log["blockNumber"])
   console.log(`${ from } => ${ to }: ${ value }`);
    // The `event.log` has the entire EventLog
    // Optionally, stop listening
   // event.removeListener();
  });
