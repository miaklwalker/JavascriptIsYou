import { Vector } from "../Math/Vector.js";
import { spriteBlocks } from "../blocks/BlocksCache.js";
import { Message } from "../MessageCenter/message.js";
import { Level } from "../Main.js";

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
                let message = new Message(other.name,"collision","left",true)
                Level.msgCenter.add(message);
            }
        }
        if (block.position.same(right)) {
            if (block.stop) {
                let message = new Message(other.name,"collision","right",true)
                Level.msgCenter.add(message);
            }
        }
        if (block.position.same(up)) {
            if (block.stop) {
                let message = new Message(other.name,"collision","up",true)
                Level.msgCenter.add(message);
            }
        }
        if (block.position.same(down)) {
            if (block.stop) {
                let message = new Message(other.name,"collision","down",true)
                Level.msgCenter.add(message);
            }
        }
    });
}
