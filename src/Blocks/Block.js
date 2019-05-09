import { Vector } from "../Vectors.js";

export class Block {
  constructor(x, y, name, type) {
    this.position = new Vector(x, y);
    this.name = name;
    this.Width = 10;
    this.type = type;
  }
}
