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
    num: 0,
    msgCenter: new MessageQueue(),

};

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");
    
function setup() {
    controls.addControls()
    draw();
}
function draw() {
    // Draw BackGround
    context.drawImage(drawBackground(canvas,"black"),0,0);
    // Draw Grid
   context.drawImage(drawGrid(canvas,GameInfo.tiles),0,0);
   // Gets level data from Level Object and makes the level
    makeLevel();
    // Draws all the blocks
    drawBlocks(canvas,context,GameInfo.tiles)
    // checks the rules
    blockLogic();
    // sends all of the messages
    Level.msgCenter.dispatch();
    // sets all of the rules
    setRules();
    Restart();
    loop(draw);
}
function loop(name, frameRate) {
    //setTimeout(name, 1000 / frameRate);
    requestAnimationFrame(name);
}
setup();
