import { SpriteBlock } from "./Blocks/spriteBlock.js";
import { objects } from "./blockDraw.js";
import { cache } from "./index.js";

export function makeHorizontalRow(startX, startY, finishX, name, type) {
  if (cache.has([startX, startY, finishX, name, type])) {
    return cache.get([startX, startY, finishX, name, type]);
  }
  let blocks = [];
  for (let i = startX; i < finishX; i++) {
    let block = new SpriteBlock(i, startY, name, type);
    blocks.push(block);
  }
  cache.set([startX, startY, finishX, name, type], blocks);
  return blocks;
}

export function makeVerticalRow(startX, startY, finishY, name, type) {
  if (cache.has([startX, startY, finishY, name, type])) {
    return cache.get([startX, startY, finishY, name, type]);
  }
  let blocks = [];
  for (let i = startY; i < finishY; i++) {
    let block = new SpriteBlock(startX, i, name, type);
    blocks.push(block);
  }
  cache.set([startX, startY, finishY, name, type], blocks);
  return blocks;
}
