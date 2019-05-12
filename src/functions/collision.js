import { objects } from "./blockDraw.js";
import { SpriteBlock } from "./Blocks/spriteBlock.js";
import { Vector } from "./Vectors.js";
import { controls } from "./Controls.js";
import { textBlock } from "./Blocks/textBlock.js";
export function runCollisions() {
    objects.forEach(block => {
        if (block instanceof SpriteBlock && block.you === true) {
            collision(block);
        }
    });
}
function collision() {

}

