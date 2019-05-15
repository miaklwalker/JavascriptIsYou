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
		if (this.you) {
			if (!this[message.data]) {
				switch (message.data) {
					case 'right':
						this.position.x += 1;
						break;
					case 'left':
						this.position.x -= 1;
						break;
					case 'up':
						this.position.y -= 1;
						break;
					case 'down':
						this.position.y += 1;
						break;
				}
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
		let from = msg.from;
		let to = msg.to;
		switch (from) {
			case 'collision':
				if (to === this.id) {
					this[msg.type] = msg.data;
				}
				break;

            case 'push':
                if(to === this.id){
                    this.move(msg);
                }
				break;

			case 'movement':
				if (to === 'you') {
					this.move(msg);
				}
				break;
		}
	}
}
