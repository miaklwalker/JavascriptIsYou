import { makeColumns } from './MakeColumns.js';
import { makeRows } from './MakeRows.js';
import { Level } from '../src/Main.js';
import { GameInfo } from '../GameFiles/Levels.js';

export function addGroup() {
	GameInfo.Levels[Level.num].blocks.Vertical.forEach(([x, y, y2, name]) => {
		makeColumns(x, y, y2, name);
	});
	GameInfo.Levels[Level.num].blocks.horizantal.forEach(
		([x, y, y2, name]) => {
			makeRows(x, y, y2, name);
		},
	);
}
