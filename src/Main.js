import { drawBackground } from "./draw/DrawBackground.js";
import { drawGrid } from "./debugTools/GridLines.js";
import { GameInfo } from "./GameFiles/Levels.js";
import { makeLevel } from "./blockMakers/MakeLevel.js";
import { drawBlocks } from "./draw/DrawBlocks.js";
import { blockLogic } from "./Blocks/BlockLogic.js";
import { controls } from "./functions/Controls.js";
import { setRules } from "./GameFiles/Rules.js";
import { Restart } from "./functions/Restart.js";
import { runCollisions } from "./functions/collision.js";
import { MessageQueue } from "./MessageCenter/MessageQueue.js";




export const Level = { 
    num: "debug",
    msgCenter: new MessageQueue(),

};

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

//! Game Loop

    

function setup() {
    controls.addControls()
    draw();
}
function draw() {
    context.drawImage(drawBackground(canvas,"black"),0,0);
   // context.drawImage(drawGrid(canvas,GameInfo.tiles),0,0);
    makeLevel();
    drawBlocks(canvas,context,GameInfo.tiles)
    blockLogic();
   // runCollisions();
    Level.msgCenter.dispatch();

    setRules();
    Restart();
    loop(draw);
}
function loop(name, frameRate) {
    setTimeout(name, 1000 / frameRate);
}
setup();
