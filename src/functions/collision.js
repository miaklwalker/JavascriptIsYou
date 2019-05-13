import { spriteBlocks } from "../blocks/BlocksCache.js";


import { SpriteCollision } from "./SpriteCollide.js";
import { pushBlock } from "./blockPush.js";

export function runCollisions() {
    spriteBlocks.forEach(block => {
        if (block.you === true) {
            SpriteCollision(block);
            pushBlock(block)
        }
    });
}

