import {
	operatorBlocks,
	nounBlocks,
	verbBlocks,
	spriteBlocks,
} from '../blocks/BlocksCache.js';
import { GameInfo } from '../GameFiles/Levels.js';
import NounBlock from '../blocks/NounBlock.js';
import { verbBlock } from '../blocks/VerbBlocks.js';
import { isBlock } from '../blocks/IsBlocks.js';
import { SpriteBlock } from '../blocks/SpriteBlocks.js';
import { Level } from '../src/Main.js';

export function makeNounBlocks() {
	GameInfo.Levels[Level.num].blocks.Nouns.forEach(([x, y, name]) =>
		nounBlocks.push(new NounBlock(x, y, name)),
	);
}

export function makeVerbBlocks() {
	GameInfo.Levels[Level.num].blocks.Verbs.forEach(([x, y, name]) =>
		verbBlocks.push(new verbBlock(x, y, name)),
	);
}

export function makeIsBlocks() {
	GameInfo.Levels[Level.num].blocks.is.forEach(([x, y]) =>
		operatorBlocks.push(new isBlock(x, y)),
	);
}

export function makeSpritesBlocks() {
	GameInfo.Levels[Level.num].blocks.Sprites.forEach(([x, y, name]) =>
		spriteBlocks.push(new SpriteBlock(x, y, name)),
	);
}
