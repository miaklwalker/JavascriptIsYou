import { Message } from '../MessageCenter/message.js';
import { Level } from '../src/Main.js';
import { runCollisions } from '../blockFunctions/collision.js';
import { Restart } from './Restart.js';

export let controls = {
	name: 'controls',
	KeyW: false,
	KeyS: false,
	KeyA: false,
	KeyD: false,
	ArrowUp: false,
	ArrowDown: false,
	ArrowLeft: false,
	ArrowRight: false,
	click: false,
	KeyR: false,
	onMessage(message) {
		if (message.to === 'controls') {
			if (message.from === 'EventListener') {
				let direction;
				switch (message.data) {
					case 'ArrowRight':
					case 'KeyD':
						direction = 'right';
						break;

					case 'ArrowLeft':
					case 'KeyA':
						direction = 'left';
						break;

					case 'ArrowUp':
					case 'KeyW':
						direction = 'up';
						break;

					case 'ArrowDown':
					case 'KeyS':
						direction = 'down';
						break;
				}
				let msg = new Message(
					'you',
					'movement',
					message.type,
					direction,
				);
				Level.msgCenter.add(msg);
			}
		}
	},

	addControls() {
		document.addEventListener('keydown', event => {
			if (Object.keys(this).includes(`${event.code}`)) {
				event.preventDefault();
				if (event.code === 'KeyR') {
					Restart(true);
				}
				runCollisions(event.code);
				let msg = new Message(
					'controls',
					'EventListener',
					'keyPress',
					event.code,
				);
				Level.msgCenter.add(msg);
			}
		});

		document.addEventListener('keyup', event => {
			if (Object.keys(this).includes(`${event.code}`)) {
				event.preventDefault();
				this[event.code] = false;
			}
		});
		document.addEventListener('click', () => {
			this.click = true;
		});
	},
};
