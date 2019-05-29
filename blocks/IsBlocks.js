import { Vector } from '../Math/Vector.js';
import Block from './Block.js';
import { GameInfo } from '../GameFiles/Levels.js';
import { nounBlocks, verbBlocks, spriteBlocks } from './BlocksCache.js';
import { loader } from '../loaders/ImageLoader.js';

export class isBlock extends Block {
	constructor(x, y) {
		super(x, y, 'is', 'is');
		this.push = true;

		this.transformed1 = false;
		this.transformed2 = false;
		this.textFrame=0;
		this.ruleOne = [];
		this.ruleTwo = [];
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
			this.ruleOne = [];
		}
		if (this.ruleTwo.includes(undefined)) {
			this.ruleTwo = [];
		}
		this.transform();
	}

	transform() {
		let x = this.position.x;
		let y = this.position.y;

		let neighborUp = new Vector(x, y - 1);
		let neighborDown = new Vector(x, y + 1);
		let neighborLeft = new Vector(x - 1, y);
		let neighborRight = new Vector(x + 1, y);

		let nounClause1;
		let nounClause2;
		let nounClause3;
		let nounClause4;
		nounBlocks.forEach(block => {
			if (block.position.same(neighborLeft)) {
				nounClause1 = block.name;
			}
			if (block.position.same(neighborRight)) {
				nounClause2 = block.name;
			}
			if (block.position.same(neighborUp)) {
				nounClause3 = block.name;
			}
			if (block.position.same(neighborDown)) {
				nounClause4 = block.name;
			}
		});
		if (nounClause1 !== undefined && nounClause2 !== undefined) {
			if (!this.transformed1) {
				this.transformed1 = true;
				if (this.wait === 3) {
					spriteBlocks.forEach(block => {
						if (block.name == nounClause1) {
							block.name = nounClause2;
						}
					});
				} else {
					this.wait++;
				}
			} else {
				this.transformed1 = false;
			}
			if (nounClause3 !== undefined && nounClause4 !== undefined) {
				if (!this.transformed2) {
					this.transformed2 = true;
					spriteBlocks.forEach(block => {
						if (block.name == nounClause3) {
							if (this.wait === 3) {
								block.name = nounClause4;
							} else {
								this.wait++;
							}
						}
					});
				}
			} else {
				this.transformed2 = false;
			}
		}
	}
}
