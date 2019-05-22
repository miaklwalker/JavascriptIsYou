import { Vector } from '../Math/Vector.js';
import { spriteBlocks } from '../blocks/BlocksCache.js';
import { Message } from '../MessageCenter/message.js';
import { Level } from '../src/Main.js';

export function SpriteCollision(other) {
	let x = other.position.x;
	let y = other.position.y;
	let left = new Vector(x - 1, y);
	let right = new Vector(x + 1, y);
	let up = new Vector(x, y - 1);
	let down = new Vector(x, y + 1);
	spriteBlocks.forEach(block => {
		if (block.stop) {
			if (block.position.same(left)) {
				let message = new Message(
					other.id,
					'collision',
					'left',
					true,
				);
				Level.msgCenter.add(message);
			} else if (block.position.same(right)) {
				let message = new Message(
					other.id,
					'collision',
					'right',
					true,
				);
				Level.msgCenter.add(message);
			} else if (block.position.same(up)) {
				let message = new Message(
					other.id,
					'collision',
					'up',
					true,
				);
				Level.msgCenter.add(message);
			} else if (block.position.same(down)) {
				let message = new Message(
					other.id,
					'collision',
					'down',
					true,
				);
				Level.msgCenter.add(message);
			} else {
				let message = new Message(
					other.name,
					'collision',
					'none',
					false,
				);
			}
		}
	});
}
