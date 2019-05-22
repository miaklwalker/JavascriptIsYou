import { spriteBlocks } from '../blocks/BlocksCache.js';
import { SpriteBlock } from '../blocks/SpriteBlocks.js';

export function makeRows(startX, startY, finishX, name, type) {
	for (let i = startX; i < finishX; i++) {
		let block = new SpriteBlock(i, startY, name, type);
		spriteBlocks.push(block);
	}
}
