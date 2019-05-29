import Block from './Block.js';
import { GameInfo } from '../GameFiles/Levels.js';
import { loader } from '../loaders/ImageLoader.js';

export default class NounBlock extends Block {
	constructor(x, y, name) {
		super(x, y, name, 'noun');
		this.textFrame=0
		this.push = true;
	}
	show(canvas, context, Cells) {
		context.drawImage(
			loader(
				GameInfo.textSprites[this.name][this.textFrame%3],
				GameInfo.Text[this.name],
			),
			(this.position.x * canvas.width) / Cells,
			(this.position.y * canvas.height) / Cells,
			canvas.width / Cells,
			canvas.height / Cells,
		);
		this.frame++
		if(this.frame%(1000/100)===0){
			this.textFrame++
		}
	}
}
