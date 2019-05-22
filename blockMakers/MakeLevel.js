import { GameInfo } from '../GameFiles/Levels.js';
import {
	makeNounBlocks,
	makeIsBlocks,
	makeSpritesBlocks,
	makeVerbBlocks,
} from './MakeBlocks.js';
import { addGroup } from './MakeGroup.js';
import { Level } from '../src/Main.js';

export function makeLevel() {
	if (!GameInfo.drawn.level) {
		addGroup();
		makeNounBlocks();
		makeIsBlocks();
		makeSpritesBlocks();
		makeVerbBlocks();
		Level.msgCenter.addEntities();
		GameInfo.drawn.level = true;
	}
}
