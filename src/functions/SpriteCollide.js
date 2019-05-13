import { Vector } from "../Math/Vector.js";
import { spriteBlocks } from "../blocks/BlocksCache.js";

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
                other.left = true;
            }
            if (block.position.same(right)) {
                other.right = true;
            }
            if (block.position.same(up)) {
                other.up = true;
            }
            if (block.position.same(down)) {
                other.down = true;
            }
        }
    });
}