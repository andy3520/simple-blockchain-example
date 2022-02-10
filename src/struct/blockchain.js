const { Block } = require('./block');
const { calculateHash } = require('../util/hash');

class Blockchain {
  constructor(genesisBlock, chain, difficulty) {
    this.genesisBlock = genesisBlock;
    this.chain = chain;
    this.difficulty = difficulty;
  }

  static create(difficulty) {
    const genesisBlock = new Block(null);
    return new Blockchain(genesisBlock, [genesisBlock], difficulty);
  }

  addBlock(from, to, amount) {
    const blockData = { from, to, amount };
    const lastBlock = this.chain[this.chain.length - 1];
    const newBlock = new Block(blockData, lastBlock.hash);
    newBlock.mine(this.difficulty);
    this.chain.push(newBlock);
  }

  isValid() {
    if (this.chain.length === 1) return true;
    for (let index = 1; index < this.chain.length; index++) {
      const currentBlock = this.chain[index];
      const previousBlock = this.chain[index - 1];
      if (
        currentBlock.hash !== calculateHash(currentBlock) ||
        previousBlock.hash !== currentBlock.previousHash
      )
        return false;
    }
    return true;
  }
}

module.exports = { Blockchain };
