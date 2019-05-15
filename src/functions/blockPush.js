import { allBlocks } from "../blocks/BlocksCache.js";
import { controls } from "./Controls.js";
import { Vector } from "../Math/Vector.js";
import { Message } from "../MessageCenter/message.js";
import { Level } from "../Main.js";

export function pushBlock(other) {
    let x = other.position.x;
    let y = other.position.y;

    let left = new Vector(x - 1, y);
    let right = new Vector(x + 1, y);
    let up = new Vector(x, y - 1);
    let down = new Vector(x, y + 1);

    for (let arr of allBlocks) {
        arr.forEach(block => {
            console.log("Not the same Blocks");
            if ((block.push = true)) {
                console.log(" The block can be pushed");
                if (block.position.same(left)&&other.lastMove==="left") {
                    let msg = new Message(
                        block.id,
                        "push",
                        "Sprite",
                        other.lastMove,
                    );
                    Level.msgCenter.add(msg);
                }
            }
        });
    }
}
