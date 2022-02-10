const { calculateHash } = require('../util/hash');

class Block {
  constructor(data, prevHash) {
    this.data = data;
    this.hash = '0';
    this.prevHash = prevHash;
    this.timestamp = new Date();
    this.pow = 0;
  }

  mine(difficulty) {
    console.log(`Mining block...`);
    const startTime = performance.now();
    const regex = new RegExp(`^0{${difficulty}}.*`);

    while (!this.hash.match(regex)) {
      process.stdout.write(
        `Hash ${this.hash} does not match difficulty ${difficulty}...`
      );
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      this.pow++;
      this.hash = calculateHash(this);
    }

    const endTime = performance.now();
    console.log(
      `Block mined: ${this.hash}. Pow ${this.pow}. Took ${
        endTime - startTime
      }ms`
    );
  }
}

module.exports = { Block };
