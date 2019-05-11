import { drawBackground, drawGrid } from "./GameScreen.js";
import { drawRows, RowDrawn } from "./RowDraw.js";
import { drawBlocks, BlocksDrawn} from "./blockDraw.js";
import { controls } from "./Controls.js";
import { setRules, Rules } from "./gameRules.js";
import { runCollisions } from "./collision.js";

export const cache = new Map();
export let Drawn = [BlocksDrawn,RowDrawn];
export let Level={
  Num:1
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

  GameLoop(draw);
}

function GameLoop(name) {
 requestAnimationFrame(name)
}

setup();
