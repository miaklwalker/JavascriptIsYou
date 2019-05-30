import { drawBackground } from '../draw/DrawBackground.js';
import { GameInfo } from '../GameFiles/Levels.js';
import { makeLevel } from '../blockMakers/MakeLevel.js';
import { drawBlocks } from '../draw/DrawBlocks.js';
import { blockLogic } from '../blockFunctions/BlockLogic.js';
import { controls } from '../functions/Controls.js';
import { setRules } from '../GameFiles/Rules.js';
import { Restart } from '../functions/Restart.js';
import { MessageQueue } from '../MessageCenter/MessageQueue.js';
import gameWin from '../functions/gameWin.js';

export const Level = {num: 0,msgCenter: new MessageQueue(),};

const canvas = document.getElementById('screen');
canvas.width = window.innerHeight;
canvas.height = window.innerHeight * 0.9;
const context = canvas.getContext('2d');

function setup() {
	controls.addControls();
	draw();
}
function draw() {
	if (Level.num < 5||Level.num==='debug') {
		context.drawImage(drawBackground(canvas, 'black'), 0, 0);
		makeLevel();
		drawBlocks(canvas, context, GameInfo.Levels[Level.num].tiles);
		blockLogic();
		Level.msgCenter.dispatch();
		setRules();
		Restart();
		loop(draw);
	} else {
		gameWin(canvas, context);
	}
}

function loop(name) {
	requestAnimationFrame(name);
}
setup();
