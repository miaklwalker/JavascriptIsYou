import { objects } from './blockDraw.js';
import { SpriteBlock } from './Blocks/spriteBlock.js';
import { Vector } from './Vectors.js';
export function runCollisions() {
	objects.forEach(block => {
		if (block instanceof SpriteBlock && block.you === true) {
			collision(block);
		}
	});
}
function collision(other) {
	for (let i = 0; i < objects.length; i++) {
			if (objects[i] instanceof SpriteBlock) {
				if (objects[i].stop === true || objects[i].push===true) {
					let x = objects[i].position.x;
					let y = objects[i].position.y;
					let left = new Vector(x + 1, y);
					let right = new Vector(x - 1, y);
					let up = new Vector(x, y + 1);
					let down = new Vector(x, y - 1);
					if (other.position.same(left)) {
						other.left = true;
						console.log('left');
					}
					if (other.position.same(right)) {
						other.right = true;
						console.log('right');
					}
					if (other.position.same(up)) {
						other.up = true;
						console.log('up');
					}
					if (other.position.same(down)) {
						other.down = true;
						console.log('down');
					}
				}
			}
		}
	}

