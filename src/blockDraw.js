import { GameInfo } from "./gameInfo";
import { LevelNum } from ".";
import { textBlock } from "./Blocks/textBlock.js";
import { SpriteBlock } from "./Blocks/spriteBlock.js";
import { isBlock } from "./Blocks/isBlock.js";
import { verbBlock } from "./Blocks/verbBlock";

export const objects = [];
export function drawBlocks(canvas, context, cells) {
  GameInfo.Levels[LevelNum].blocks.Nouns.forEach(([x, y, name, type]) =>
    objects.push(new textBlock(x, y, name, type))
  );
  GameInfo.Levels[LevelNum].blocks.Verbs.forEach(([x, y, name, type]) =>
    objects.push(new verbBlock(x, y, name, type))
  );
  GameInfo.Levels[LevelNum].blocks.Sprites.forEach(([x, y, name, type]) =>
    objects.push(new SpriteBlock(x, y, name, type))
  );
  GameInfo.Levels[LevelNum].blocks.is.forEach(([x, y, type]) =>
    objects.push(new isBlock(x, y, type))
  );
  objects.forEach(object => {
    object.show(canvas, context, cells);
    if (object instanceof isBlock) {
      object.Rules();
    }
  });
}
