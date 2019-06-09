import { Level } from '../src/Main.js';
import { GameInfo } from '../GameFiles/Levels.js';
import { Restart } from './Restart.js';

export function win() {
	Level.num++;
	GameInfo.drawn.level = false;
	Restart(true);
	localStorage.setItem('saveGame',Level.num)
}
