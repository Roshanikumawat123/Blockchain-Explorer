# Blockchain-Explorer
Important: repeat the below steps after every git pull

From the root of the repository:

./main.sh clean
To clean the /node_modules, client/node_modules client/build, client/coverage, app/test/node_modules directories
./main.sh install
To install, run tests, and build project
Or

  $ cd blockchain-explorer
  $ npm install
  $ cd client/
  $ npm install
  $ npm run build


Users should be able to fetch block data using block hash or block number.
To fetch block data using block hash or block number, you can use the Ethereum JSON-RPC API and send a request with the desired block hash or block number. Here's an example in JavaScript using the web3.js library:


To allow users to connect their MetaMask wallet to your website and fetch data from the MetaMask provider, you can use the MetaMask provider APIs. Here's an example in JavaScript using the web3.js library:

javascript

// Connect to Ethereum network
let web3;
if (typeof window.ethereum !== 'undefined') {
  // MetaMask is connected
  web3 = new Web3(window.ethereum);
  try {
    // Request account access if needed
    await window.ethereum.enable();
  } catch (error) {
    console.error(error);
  }
} else {
  // MetaMask is not connected, use backend provider
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}

// Fetch block data using block hash
async function fetchBlockByHash(blockHash) {
  const block = await web3.eth.getBlock(blockHash);
  console.log(block);
}

// Fetch transaction data using transaction hash
async function fetchTransactionByHash(transactionHash) {
  const transaction = await web3.eth.getTransaction(transactionHash);
  console.log(transaction);
}
In this example, the code first checks if MetaMask is connected by checking if the window.ethereum object is defined. If MetaMask is connected, the code creates a Web3 instance using the MetaMask provider. If MetaMask is not connected, the code creates a Web3 instance using a backend provider. The rest of the code for fetching block and transaction data is the same as the previous examples.



