let web3;
if (typeof window.ethereum !== 'undefined') {
  // MetaMask is connected
  web3 = new Web3(window.ethereum);
  try {
    // request account access if needed
    await window.ethereum.enable();
  } catch (error) {
    console.error(error);
  }
} else {
  // metamask is not connected, use backend provider
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}

// fetch block data using block hash
async function fetchBlockByHash(blockHash) {
  const block = await web3.eth.getBlock(blockHash);
  console.log(block);
}

// fetch transaction data using transaction hash
async function fetchTransactionByHash(transactionHash) {
  const transaction = await web3.eth.getTransaction(transactionHash);
  console.log(transaction);
}
