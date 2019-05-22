import { spriteBlocks } from '../blocks/BlocksCache.js';
import { SpriteBlock } from '../blocks/SpriteBlocks.js';

export function makeColumns(startX, startY, finishY, name, type) {
	for (let i = startY; i < finishY; i++) {
		let block = new SpriteBlock(startX, i, name, type);
		spriteBlocks.push(block);
	}
}
