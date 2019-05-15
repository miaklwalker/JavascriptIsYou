import { Vector } from "../Math/Vector.js";
import { Message } from "../MessageCenter/message.js";
import { uniqueid } from "../functions/CreateId.js";

export default class Block {
    constructor(x, y, name, type , id = uniqueid()) {
        this.position = new Vector(x, y);
		this.name = name;
		this.id = id
        this.type = type;
		this.moveBuffer = 0;
		this.lastMove =""

        this.you = false;
        this.push = false;
        this.win = false;
        this.stop = false;

        this.shove = new Vector(0, 0);

        this.right = false;
        this.left = false;
        this.up = false;
        this.down = false;
    }
    move(message) {
        if (this.you || message.from === "push") {
            if (!this[message.data]||message.from==="push") {

                switch (message.data) {
                    case "right":
                        this.position.x += 1;
                        break;
                    case "left":
                        this.position.x -= 1;
                        break;
                    case "up":
                        this.position.y -= 1;
                        break;
                    case "down":
                        this.position.y += 1;
                        break;
				}
				this.lastMove = message.data;
				console.log(this.lastMove)
            }
        }
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.moveBuffer++;
        if (this.win) {
            spriteBlocks.forEach(block => {
                if (block.you) {
                    if (block.position.same(this.position)) {
                        win();
                    }
                }
            });
        }
    }
    onMessage(msg) {
        if ((msg.to === "you" && this.you === true) || msg.to === this.id) {
            if (msg.from === "collision") {
                if (msg.to === this.id) {
                    switch (msg.type) {
                        case "right":
                            this.right = true;
                            break;
                        case "left":
                            this.left = true;
                            break;
                        case "up":
                            this.up = true;
                            break;
                        case "down":
                            this.down = true;
                            break;
                        case none:
                            console.log(`its none`);
                            this.right = false;
                            this.left = false;
                            this.up = false;
                            this.down = false;
                            break;
                    }
                }
            } else if (msg.from === "movement" || msg.from === "push") {
                this.move(msg);
            }
        }
    }
}
