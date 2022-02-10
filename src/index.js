const { Blockchain } = require('./struct/blockchain');

const blockchain = Blockchain.create(4); // difficulty increases exponentially with each increase
blockchain.addBlock('Alice', 'Bob', 5);
blockchain.addBlock('Alice', 'Bob', 5);
blockchain.addBlock('Alice', 'Bob', 5);
blockchain.addBlock('John', 'Doe', 100);
blockchain.addBlock('John', 'Doe', 100);
blockchain.addBlock('John', 'Doe', 100);
blockchain.addBlock('John', 'Doe', 100);
blockchain.addBlock('John', 'Doe', 100);
console.log(JSON.stringify(blockchain, null, 2));
console.log(blockchain.isValid()); // true - since we haven't tampered with it
blockchain.chain[1].data.amount = 200; // tampering with the blockchain
console.log(blockchain.isValid()); // false - tampered with the blockchain
