import { assertEquals } from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { Block } from "../src/Block.ts";

Deno.test("Test Block", () => {
  const blockChain: Block[] = [];
  const genesisBlock = new Block("0", Date.now(), "Genesis Block");
  blockChain.push(genesisBlock);

  const newBlock = new Block(blockChain[0].hash, Date.now(), "First Block");
  blockChain.push(newBlock);

  blockChain.forEach((block: Block, index) => {
    const previousHash = index === 0 ? "0" : blockChain[index - 1].hash;
    assertEquals(block.previousHash, previousHash);
  });
});
