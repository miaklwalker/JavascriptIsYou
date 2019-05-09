import { drawBackground, drawGrid } from "./GameScreen.js";
import { drawRows } from "./RowDraw.js";
import { drawBlocks, moveBlocks } from "./blockDraw.js";
import { controls } from "./Controls.js";
import { setRules, Rules } from "./gameRules.js";

export const cache = new Map();
export const LevelNum = 0;
const canvasSize = 540;
const cells = 20;

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

function setup() {
  controls.addControls();
  draw();
}
function draw() {
  context.drawImage(drawBackground(canvasSize, "black"), 0, 0);
  context.drawImage(drawGrid(canvasSize, canvasSize, cells), 0, 0);
  drawRows();
  drawBlocks(canvas, context, cells);
  setRules();
  //console.log(Rules)

  //GameLoop(draw);
}

function GameLoop(name, FrameRate) {
  // setTimeout(requestAnimationFrame(name), 1000 / FrameRate);
  requestAnimationFrame(name);
}

setup();
