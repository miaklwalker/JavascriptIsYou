import { drawRows, RowDrawn } from "./RowDraw.js";
import { drawBlocks, BlocksDrawn} from "./blockDraw.js";
import { controls } from "./Controls.js";
import { setRules, Rules } from "./gameRules.js";
import { runCollisions } from "./collision.js";
import { drawBackground } from "./drawBackground.js";
import { drawGrid } from "./drawGrid.js";

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
  context.drawImage(drawBackground(canvas, "black"), 0, 0);
  context.drawImage(drawGrid(canvas, cells), 0, 0);
  drawRows();
  drawBlocks(canvas, context, cells);
  runCollisions();
  setRules();


  GameLoop(draw);
}

function GameLoop(name) {
 //requestAnimationFrame(name)
 setTimeout(name,1000/15)
}

setup();
