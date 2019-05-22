import { allBlocks } from '../blocks/BlocksCache.js';
import { controls } from '../functions/Controls.js';

export class MessageQueue {
	constructor() {
		this.messages = [];
		this.entities = [];
	}
	add(msg) {
		this.messages.push(msg);
	}
	addEntities() {
		for (let i = 0; i < 4; i++) {
			allBlocks[i].forEach(block => this.entities.push(block));
		}
		controls.addControls;
		this.entities.push(controls);
	}
	dispatch() {
		for (let i = 0; i < this.messages.length; i++) {
			let msg = this.messages[i];
			this.entities.forEach(entity => {
				entity.onMessage(msg);
			});
			this.messages.splice(i, 1);
		}
	}
	purge() {
		this.entities = [];
	}
}
