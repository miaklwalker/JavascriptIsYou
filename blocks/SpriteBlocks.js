import Block from './Block.js';
import { GameInfo } from '../GameFiles/Levels.js';
import { loader } from '../loaders/ImageLoader.js';

export class SpriteBlock extends Block {
	constructor(x, y, name) {
		super(x, y, name, 'Sprite');
	}
	show(canvas, context, Cells) {
		let staticSprite = this.name !== 'baba' ?
			GameInfo.Sprites[this.name][this.frame % 5]:
			GameInfo.Sprites[this.name][this.direction][this.frame % 5];
			context.fillStyle = GameInfo.Sprite[this.name];
			context.drawImage(
				loader(
					staticSprite,
					GameInfo.Sprite[this.name]),
					(this.position.x * canvas.width) / Cells,
					(this.position.y * canvas.height) / Cells,
					canvas.width / Cells,
					canvas.height / Cells,
			);

	}
}
