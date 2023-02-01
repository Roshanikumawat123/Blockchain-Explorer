// connect to Ethereum network
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// fetch block data using block hash
async function fetchBlockByHash(blockHash) {
  const block = await web3.eth.getBlock(blockHash);
  console.log(block);
}

// fetch block data using block number
async function fetchBlockByNumber(blockNumber) {
  const block = await web3.eth.getBlock(blockNumber, true);
  console.log(block);
}
