## Simple blockchain example

### Components:

- Blockchain
  - create: create new chain with config difficult
  - addBlock: add new block with data to the chain
  - isValid: check if the chain is valid (in case of manipulate)
- Block
  - data: transaction data
  - hash: block hash
  - prevHash: previous block hash
  - timestamp: block created timestamp
  - pow: the nonce that combine with block data, previous hash and timestamp to create valid hash
  - mine: mine current block (find the none)
- Utils:
  - calculateHash: calculate sha256 hash from block data + pow + previous hash + timestamp

### Install and Run:

- Install dependencies:
  - ```Bash
      yarn
    ```
- Run:
  - ```bash
      yarn start
    ```

### Update:

- Try to edit the index file, update the difficult and add more transaction
