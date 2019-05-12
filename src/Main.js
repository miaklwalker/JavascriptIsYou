import { drawBackground } from "./draw/DrawBackground.js";
import { drawGrid } from "./debugTools/GridLines.js";
import { GameInfo } from "./GameFiles/Levels.js";
import { makeLevel } from "./blockMakers/MakeLevel.js";
import { drawBlocks } from "./draw/DrawBlocks.js";




export const Level = { num: 0 };

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

//! Game Loop

    

function setup() {
    draw();
}
function draw() {
    context.drawImage(drawBackground(canvas,"black"),0,0);
    context.drawImage(drawGrid(canvas,GameInfo.tiles),0,0);
    makeLevel()
    drawBlocks(canvas,context,GameInfo.tiles)
    makeLevel();
    loop(draw);
}
function loop(name, frameRate) {
    setTimeout(name, 1000 / frameRate);
}
setup();
