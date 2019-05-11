import { SpriteBlock } from "./Blocks/spriteBlock.js";


export function makeHorizontalRow(startX, startY, finishX, name, type) {
  let blocks = [];
  for (let i = startX; i < finishX; i++) {
    let block = new SpriteBlock(i, startY, name, type);
    blocks.push(block);
  }
  return blocks;
}

export function makeVerticalRow(startX, startY, finishY, name, type) {
  let blocks = [];
  for (let i = startY; i < finishY; i++) {
    let block = new SpriteBlock(startX, i, name, type);
    blocks.push(block);
  }
  return blocks;
}
