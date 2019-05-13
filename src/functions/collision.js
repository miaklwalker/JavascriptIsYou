import { spriteBlocks } from "../blocks/BlocksCache.js";


import { SpriteCollision } from "./SpriteCollide.js";

export function runCollisions() {
    spriteBlocks.forEach(block => {
        if (block.you === true) {
            SpriteCollision(block);
        }
    });
}

