import { AptosClient } from "movement-sdk";
const NODE_URL = "https://seed-node1.movementlabs.xyz";
const client = new AptosClient(NODE_URL);

getLedgerInfo();

async function getLedgerInfo(){
  let info = await client.getLedgerInfo();
  console.log(info);
}