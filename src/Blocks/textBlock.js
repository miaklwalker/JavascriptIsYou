import { Block } from './Block.js';
import { GameInfo } from '../gameInfo.js';
import { Vector } from '../Vectors.js';

export class textBlock extends Block {
	constructor(x, y, name, type) {
		super(x, y, name, 'noun');
		this.push = true;
		this.shove = new Vector(0, 0);
	}
	show(canvas, context, cells) {
		context.fillStyle = GameInfo.Text[this.name];
		context.textBaseline = 'top';
		context.font = "20px 'arial'";

		context.fillText(
			this.name,
			(this.position.x * canvas.width) / cells + 2,
			(this.position.y * canvas.height) / cells,
			canvas.width / cells,
		);
	}
}
