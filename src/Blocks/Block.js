import { Vector } from '../Math/Vector.js';
import { Message } from '../MessageCenter/message.js';

export default class Block {
	constructor(x, y, name, type) {
		this.position = new Vector(x, y);
		this.name = name;
		this.type = type;
		this.moveBuffer = 0;

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
		console.info(message);
		if (this.you) {
			if (this.moveBuffer % 1 === 0) {
				if (this[message.data]===false) {
                    console.log(this[message.data] +' Must have been false')
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
				}else{console.log('I Stopped')}
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
		if (msg.to === 'you' && this.you === true) {
			console.info('You got mail ' + this.name);
			if (msg.from === 'collision') {
				if (msg.to === this.name) {
					switch(msg.type){
                        case 'right':
                        this.right = msg.data
                        break;
                        case 'left':
                        this.left = msg.data
                        break;
                        case 'up':
                        this.up = msg.data
                        break;
                        case 'down':
                        this.down = msg.data
                        break;
                    }
				}
			} else if (msg.from === 'movement') {
				this.move(msg);
			}
		}
	}
}
