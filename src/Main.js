import { drawBackground } from '../draw/DrawBackground.js';
//import { drawGrid } from "./debugTools/GridLines.js";
import { GameInfo } from '../GameFiles/Levels.js';
import { makeLevel } from '../blockMakers/MakeLevel.js';
import { drawBlocks } from '../draw/DrawBlocks.js';
import { blockLogic } from '../blockFunctions/BlockLogic.js';
import { controls } from '../functions/Controls.js';
import { setRules } from '../GameFiles/Rules.js';
import { Restart } from '../functions/Restart.js';
import { MessageQueue } from '../MessageCenter/MessageQueue.js';
import { loader } from '../loaders/ImageLoader.js';
//import { gridGuide } from "./debugTools/DrawNumber.js";

let baba = GameInfo.Sprites.flag;

export const Level = {
	num: 3,
	msgCenter: new MessageQueue(),
};

const canvas = document.getElementById('screen');
canvas.width = window.innerHeight;
canvas.height = window.innerHeight;
const context = canvas.getContext('2d');

function setup() {
	controls.addControls();
	draw();
}
function draw() {
	if (Level.num < 4) {
		// Draw BackGround
		context.drawImage(drawBackground(canvas, 'black'), 0, 0);
		// Gets level data from Level Object and makes the level
		makeLevel();
		// Draws all the blocks
		drawBlocks(canvas, context, GameInfo.tiles);
		// checks the rules
		blockLogic();
		// sends all of the messages
		Level.msgCenter.dispatch();
		// sets all of the rules
		setRules();
		Restart();
		loop(draw);
	} else {
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = 'black';
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = 'gold';
		context.font = '128px , sans';
		context.fillText('YOU WIN!', canvas.width / 2-40, canvas.height / 2);
	}
}
function loop(name) {
	requestAnimationFrame(name);
}
setup();
