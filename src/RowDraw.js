import { GameInfo } from "./gameInfo.js";
import { Level } from "./index.js";
import { makeVerticalRow, makeHorizontalRow } from "./filler.js";
import { objects } from "./blockDraw.js";
export let RowDrawn = false;

export function drawRows() {
if(!RowDrawn){
  GameInfo.Levels[Level.Num].blocks.Vertical.forEach(
    ([x, y, y2, name, type]) => {
      makeVerticalRow(x, y, y2, name, type).forEach(block => {
        objects.push(block);
      });
    }
  );
  GameInfo.Levels[Level.Num].blocks.horizantal.forEach(
    ([x, y, y2, name, type]) => {
      makeHorizontalRow(x, y, y2, name, type).forEach(block => {
        objects.push(block);
      });
    }
  );
  RowDrawn = true;
}
}
