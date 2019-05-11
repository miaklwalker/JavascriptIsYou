import { objects } from "./blockDraw.js";
import { SpriteBlock } from "./Blocks/spriteBlock.js";
import { Vector } from "./Vectors.js";
import { controls } from "./Controls.js";
export function runCollisions() {
    objects.forEach(block => {
        if (block instanceof SpriteBlock && block.you === true) {
            collision(block);
        }
    });
}
function collision(other) {
    for (let i = 0; i < objects.length; i++) {
       // if (objects[i] instanceof SpriteBlock) {
            if (objects[i].stop === true || objects[i].push === true) {
                let x = objects[i].position.x;
                let y = objects[i].position.y;
                let left = new Vector(x + 1, y);
                let right = new Vector(x - 1, y);
                let up = new Vector(x, y + 1);
                let down = new Vector(x, y - 1);
                if (other.position.same(left)) {
					other.left = true;
					if(objects[i].push===true&&controls.ArrowLeft===true){
						objects[i].shove.x=-1
						objects[i].position.add(objects[i].shove);
						objects[i].shove.mult(0);
					}
                    console.log("left");
                }
                if (other.position.same(right)) {
					other.right = true;
					if(objects[i].push===true&&controls.ArrowRight===true){
						objects[i].shove.x=1;
						objects[i].position.add(objects[i].shove);
						objects[i].shove.mult(0);
					}
                    console.log("right");
                }
                if (other.position.same(up)) {
					other.up = true;
					if(objects[i].push===true&&controls.ArrowUp===true){
						objects[i].shove.y=-1
						objects[i].position.add(objects[i].shove);
						objects[i].shove.mult(0);
					}
                    console.log("up");
                }
                if (other.position.same(down)) {
					other.down = true;
					if(objects[i].push===true&&controls.ArrowDown===true){
						objects[i].shove.y=1;
						objects[i].position.add(objects[i].shove)
						objects[i].shove.mult(0);
					}
                    console.log("down");
				}
				
            }
        }
   // }
}

