import { Vector } from '../Math/Vector.js';
import Block from './Block.js';
import { GameInfo } from '../GameFiles/Levels.js';
import { nounBlocks, verbBlocks } from './BlocksCache.js';

export class isBlock extends Block {
	constructor(x, y) {
		super(x, y, 'is', 'is');
		this.push = true;
		this.neighborUp = new Vector(x, y - 1);
		this.neighborDown = new Vector(x, y + 1);
		this.neighborLeft = new Vector(x - 1, y);
		this.neighborRight = new Vector(x + 1, y);
		this.ruleOne = [];
		this.ruleTwo = [];
	}
	show(canvas, context, cells) {
		context.fillStyle = GameInfo.Text[this.name];
		context.textBaseline = 'top';
		context.font = "20px 'arial'";
		context.fillText(
			this.name,
			(this.position.x * canvas.width) / cells + 6,
			(this.position.y * canvas.height) / cells+3,
			canvas.width / cells,
		);
	}
	rules() {
		this.ruleOne = [];
		this.ruleTwo = [];
	nounBlocks.forEach(block=>{
		if(this.neighborLeft.same(block.position)){
			this.ruleOne.unshift(block.name);
		}
		if(this.neighborUp.same(block.position)){
			this.ruleTwo.unshift(block.name);
		}
	});
	verbBlocks.forEach(block=>{
		if(this.neighborRight.same(block.position)){
			this.ruleOne.push(block.name);
		}
		if(this.neighborDown.same(block.position)){
			this.ruleTwo.push(block.name);
		}
	})
	 if(this.ruleOne.includes(undefined)){
	 	this.ruleOne = [];
	 }	
		if(this.ruleTwo.includes(undefined)){
	 	this.ruleTwo = [];
	 }
	}
}
