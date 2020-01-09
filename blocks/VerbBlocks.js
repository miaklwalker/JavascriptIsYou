import { GameInfo } from '../GameFiles/Levels.js';
import Block from './Block.js';
import { loader } from '../loaders/ImageLoader.js';

export class verbBlock extends Block {
	constructor(x, y, name) {
		super(x, y, name, 'verb');
		this.push = true;
	}
}
