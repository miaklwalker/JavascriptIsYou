import Block from './Block.js';
import { GameInfo } from '../GameFiles/Levels.js';
import { loader } from '../loaders/ImageLoader.js';

export default class NounBlock extends Block {
	constructor(x, y, name) {
		super(x, y, name, 'noun');
		this.push = true;
	}

}
