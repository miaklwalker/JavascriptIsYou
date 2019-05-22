import { operatorBlocks, spriteBlocks } from '../blocks/BlocksCache.js';
import { GameInfo } from './Levels.js';

export let Rules = {};

export function setRules() {
	Rules = {};
	for (let i = 0; i < spriteBlocks.length; i++) {
		GameInfo.Rules.forEach(rule => (spriteBlocks[i][rule] = false));
	}
	operatorBlocks.forEach(block => {
		Rules[block.ruleOne[0]] = [block.ruleOne[1]];
		Rules[block.ruleTwo[0]] = [block.ruleTwo[1]];
	});
	applyRules();
}

function applyRules() {
	let rules = Object.values(Rules);
	let names = Object.keys(Rules);
	for (let i = 0; i < spriteBlocks.length; i++) {
		for (let j = 0; j < rules.length; j++) {
			if (spriteBlocks[i].name === names[j]) {
				spriteBlocks[i][rules[j]] = true;
			}
		}
	}
}
