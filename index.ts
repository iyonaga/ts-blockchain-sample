import { Block } from "./src/Block.ts";

const blockChain: Block[] = [];
const genesisBlock = new Block("0", Date.now(), "Genesis Block");
blockChain.push(genesisBlock);

for (let i = 0; i < 5; i++) {
  const newBlock: Block = new Block(
    blockChain[i].hash,
    Date.now(),
    `Data ${i + 1}`,
  );
  blockChain.push(newBlock);
}

console.log(blockChain);
