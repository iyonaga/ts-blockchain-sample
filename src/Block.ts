import { createHash } from "https://deno.land/std@0.95.0/hash/mod.ts";

export class Block {
  private readonly _hash: string;
  private nonce = 0;
  private prefix = 4;

  public constructor(
    private readonly _previousHash: string,
    private readonly timeStamp: number,
    private readonly data: string,
  ) {
    const { hash } = this.mine();
    this._hash = hash;
  }

  get hash() {
    return this._hash;
  }

  get previousHash() {
    return this._previousHash;
  }

  private calculateHash(): string {
    const dataConcated =
      `${this._previousHash}${this.timeStamp}${this.data}${this.nonce}`;
    return createHash("sha256").update(dataConcated).toString();
  }

  private mine(): { hash: string } {
    let hash = this.calculateHash();

    while (hash.startsWith("0".repeat(this.prefix)) === false) {
      this.nonce++;
      hash = this.calculateHash();
    }

    return { hash };
  }
}
