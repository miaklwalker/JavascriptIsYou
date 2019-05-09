import { GameInfo } from "./gameInfo";
import { LevelNum } from "./index.js";
import { makeVerticalRow, makeHorizontalRow } from "./filler.js";
import { objects } from "./blockDraw";

export function drawRows() {
  GameInfo.Levels[LevelNum].blocks.Vertical.forEach(
    ([x, y, y2, name, type]) => {
      makeVerticalRow(x, y, y2, name, type).forEach(block => {
        objects.push(block);
      });
    }
  );
  GameInfo.Levels[LevelNum].blocks.horizantal.forEach(
    ([x, y, y2, name, type]) => {
      makeHorizontalRow(x, y, y2, name, type).forEach(block => {
        objects.push(block);
      });
    }
  );
}
