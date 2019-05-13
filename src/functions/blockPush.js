import { allBlocks } from "../blocks/BlocksCache.js";
import { controls } from "./Controls.js";
import { Vector } from "../Math/Vector.js";

export function pushBlock(other) {
    let x = other.position.x;
    let y = other.position.y;
    let left = new Vector(x - 1, y);
    let right = new Vector(x + 1, y);
    let up = new Vector(x, y - 1);
    let down = new Vector(x, y + 1);

    for (let arr of allBlocks) {
        arr.forEach(block => {
            if (block.push) {
                if (block.position.same(left) && controls.left) {
                    other.shove.x -= 1;
                    block.position.add(other.shove);
                    other.shove.mult(0);
                }
                if (block.position.same(right) && controls.right) {
                    other.shove.x += 1;
                    block.position.add(other.shove);
                    other.shove.mult(0);
                }
                if (block.position.same(up) && controls.up) {
                    other.shove.y -= 1;
                    block.position.add(other.shove);
                    other.shove.mult(0);
                }
                if (block.position.same(down) && controls.down) {
                    other.shove.y += 1;
                    block.position.add(other.shove);
                    other.shove.mult(0);
                }
            }
        });
    }
}
