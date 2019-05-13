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
        if (block.position.same(left)) {
            if (block.stop) {
                other.left = true;
            }
        }
        if (block.position.same(right)) {
            if (block.stop) {
                other.right = true;
            }
        }
        if (block.position.same(up)) {
            if (block.stop) {
                other.up = true;
            }
        }
        if (block.position.same(down)) {
            if (block.stop) {
                other.down = true;
            }
        }
    });
}
