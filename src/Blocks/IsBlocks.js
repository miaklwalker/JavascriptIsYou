import { Vector } from '../Math/Vector.js';
import Block from './Block.js';
import { GameInfo } from '../GameFiles/Levels.js';
import { nounBlocks, verbBlocks } from './BlocksCache.js';

export class isBlock extends Block {
	constructor(x, y) {
		super(x, y, 'is', 'is');
		this.push = true;
		this.up = new Vector(x, y - 1);
		this.down = new Vector(x, y + 1);
		this.left = new Vector(x - 1, y);
		this.right = new Vector(x + 1, y);
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
		if(this.left.same(block.position)){
			this.ruleOne.unshift(block.name);
		}
		if(this.up.same(block.position)){
			this.ruleTwo.unshift(block.name);
		}
	});
	verbBlocks.forEach(block=>{
		if(this.right.same(block.position)){
			this.ruleOne.push(block.name);
		}
		if(this.down.same(block.position)){
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
