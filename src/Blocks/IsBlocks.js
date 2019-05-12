import { Vector } from '../Math/Vector.js';
import Block from './Block.js';
import { GameInfo } from '../GameFiles/Levels.js';

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
	Rules() {
		this.ruleOne = [];
		this.ruleTwo = [];
		objects.forEach(block => {
			if (block.type === 'noun') {
				if (this.upTile.same(block.position)) {
					this.ruleOne.push(block.name);
				}
				if (this.left.same(block.position)) {
					this.ruleTwo.push(block.name);
				}
			} else if (block.type === 'verb') {
				if (this.down.same(block.position)) {
					this.ruleOne.push(block.name);
				}
				if (this.right.same(block.position)) {
					this.ruleTwo.push(block.name);
				}
			}
		});
		if (
			this.ruleOne[0] !== undefined &&
			this.ruleOne[1] !== undefined
		) {
			Rules[this.ruleOne[0]] = `${this.ruleOne[1]}`;
		}
		if (
			this.ruleTwo[0] !== undefined &&
			this.ruleTwo[1] !== undefined
		) {
			Rules[this.ruleTwo[0]] = `${this.ruleTwo[1]}`;
		}
	}
}
