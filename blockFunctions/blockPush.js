import { allBlocks } from '../blocks/BlocksCache.js';
import { Vector } from '../Math/Vector.js';
import { Message } from '../MessageCenter/message.js';
import { Level } from '../src/Main.js';

export function pushBlock(other, keyPressed) {
	let x = other.position.x;
	let y = other.position.y;
	let left = new Vector(x - 1, y);
	let right = new Vector(x + 1, y);
	let up = new Vector(x, y - 1);
	let down = new Vector(x, y + 1);

	let controls = {
		KeyW: up,
		KeyS: down,
		KeyA: left,
		KeyD: right,
		ArrowUp: up,
		ArrowDown: down,
		ArrowLeft: left,
		ArrowRight: right,
	};
	let direction =
		controls[keyPressed] === up
			? 'up'
			: controls[keyPressed] === down
			? 'down'
			: controls[keyPressed] === left
			? 'left'
			: 'right';
	for (let arr of allBlocks) {
		arr.forEach(block => {
			if (block.id !== other.id) {
				if (block.push) {
					if (block.position.same(controls[keyPressed])) {
						let msg = new Message(
							block.id,
							'push',
							block.type,
							direction,
						);
						Level.msgCenter.add(msg);
						pushBlock(block, keyPressed);
					}
				}
			}
		});
	}
}
