import { spriteBlocks } from '../blocks/BlocksCache.js';
import { SpriteCollision } from './SpriteCollide.js';
import { pushBlock } from './blockPush.js';

export function runCollisions(msg) {
	spriteBlocks.forEach(block => {
		if (block.you === true) {
			SpriteCollision(block);
			pushBlock(block, msg);
		}
	});
}
