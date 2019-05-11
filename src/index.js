import { drawBackground, drawGrid } from "./GameScreen.js";
import { drawRows, RowDrawn } from "./RowDraw.js";
import { drawBlocks, BlocksDrawn} from "./blockDraw.js";
import { controls } from "./Controls.js";
import { setRules, Rules, removeRule } from "./gameRules.js";
import { runCollisions } from "./collision.js";

export const cache = new Map();
export let Drawn = [BlocksDrawn,RowDrawn];
export let Level={
  Num:0
}
const canvasSize = 540;
const cells = 20;

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

function setup() {
  controls.addControls();
  console.log(Rules)
  draw();

}
function draw() {
  context.drawImage(drawBackground(canvasSize, "black"), 0, 0);
  //context.drawImage(drawGrid(canvasSize, canvasSize, cells), 0, 0);
  runCollisions();
  drawRows();
  drawBlocks(canvas, context, cells);
  setRules();
  removeRule()

  GameLoop(draw);
}

function GameLoop(name) {
 //requestAnimationFrame(name)
 setTimeout(name,1000/15)
}

setup();
