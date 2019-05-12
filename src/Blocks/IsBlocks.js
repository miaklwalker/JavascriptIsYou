import { Vector } from "../Math/Vector.js";
import NounBlock from "./NounBlock.js";



export class isBlock extends NounBlock {
  constructor(x, y) {
    super(x, y, "is", "is");
    this.up = new Vector(x, y - 1);
    this.down = new Vector(x, y + 1);
    this.left = new Vector(x - 1, y);
    this.right = new Vector(x + 1, y);
    this.ruleOne = [];
    this.ruleTwo = [];
  }
  Rules() {
    this.ruleOne =[];
    this.ruleTwo=[];
    objects.forEach(block => {
      if (block.type === "noun") {
        if (this.upTile.same(block.position)) {
          this.ruleOne.push(block.name);
        }
        if (this.left.same(block.position)) {
          this.ruleTwo.push(block.name);
        }
      } else if (block.type === "verb") {
        if (this.down.same(block.position)) {
          this.ruleOne.push(block.name);
        }
        if (this.right.same(block.position)) {
          this.ruleTwo.push(block.name);
        }
      }
    });
    if (this.ruleOne[0] !== undefined && this.ruleOne[1] !== undefined) {
      Rules[this.ruleOne[0]] = `${this.ruleOne[1]}`;
    }
    if (this.ruleTwo[0] !== undefined && this.ruleTwo[1] !== undefined) {
      Rules[this.ruleTwo[0]] = `${this.ruleTwo[1]}`;
    }
  }
}
