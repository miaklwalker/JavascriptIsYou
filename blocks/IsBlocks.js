import { Vector } from '../Math/Vector.js';
import Block from './Block.js';
import { GameInfo } from '../GameFiles/Levels.js';
import { nounBlocks, verbBlocks } from './BlocksCache.js';
import { loader } from '../loaders/ImageLoader.js';

export class isBlock extends Block {
	constructor(x, y) {
		super(x, y, 'is', 'is');
		this.push = true;

		this.ruleOne = [];
		this.ruleTwo = [];
	}
	show(canvas, context, Cells) {
		context.fillStyle = GameInfo.Text[this.name];
		context.textBaseline = 'top';
		context.font = "20px 'arial'";
		// context.fillText(
		// 	this.name,
		// 	(this.position.x * canvas.width) / cells + 6 , 
		// 	(this.position.y * canvas.height) / cells + 3,
		// 	canvas.width / cells,
		// );
		context.drawImage(loader(GameInfo.textSprites[this.name],GameInfo.Text[this.name]),this.position.x*canvas.width/Cells,this.position.y*canvas.height/Cells,canvas.width/Cells,canvas.height/Cells)

	}
	rules() {
		let x = this.position.x;
		let y = this.position.y;
		let neighborUp = new Vector(x, y - 1);
		let neighborDown = new Vector(x, y + 1);
		let neighborLeft = new Vector(x - 1, y);
		let neighborRight = new Vector(x + 1, y);
		this.ruleOne = [];
		this.ruleTwo = [];
		nounBlocks.forEach(block => {
			if (neighborLeft.same(block.position)) {
				this.ruleOne.unshift(block.name);
			}
			if (neighborUp.same(block.position)) {
				this.ruleTwo.unshift(block.name);
			}
		});
		verbBlocks.forEach(block => {
			if (neighborRight.same(block.position)) {
				this.ruleOne.push(block.name);
			}
			if (neighborDown.same(block.position)) {
				this.ruleTwo.push(block.name);
			}
		});
		if (this.ruleOne.includes(undefined)) {
			console.log(this.ruleOne);
			this.ruleOne = [];
		}
		if (this.ruleTwo.includes(undefined)) {
			console.log(this.ruleTwo);
			this.ruleTwo = [];
		}
	}
}
