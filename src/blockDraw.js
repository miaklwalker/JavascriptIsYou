import { GameInfo } from "./gameInfo.js";
import { Level } from "./index.js";
import { textBlock } from "./Blocks/textBlock.js";
import { SpriteBlock } from "./Blocks/spriteBlock.js";
import { isBlock } from "./Blocks/isBlock.js";
import { verbBlock } from "./Blocks/verbBlock.js";

export const objects = [];
export let BlocksDrawn = false
export function drawBlocks(canvas, context, cells) {
  if(!BlocksDrawn){
  GameInfo.Levels[Level.Num].blocks.Nouns.forEach(([x, y, name, type]) =>
    objects.push(new textBlock(x, y, name, type))
  );
  GameInfo.Levels[Level.Num].blocks.Verbs.forEach(([x, y, name, type]) =>
    objects.push(new verbBlock(x, y, name, type))
  );
  GameInfo.Levels[Level.Num].blocks.Sprites.forEach(([x, y, name, type]) =>
    objects.push(new SpriteBlock(x, y, name, type))
  );
  GameInfo.Levels[Level.Num].blocks.is.forEach(([x, y, type]) =>
    objects.push(new isBlock(x, y, type))
  );
  BlocksDrawn = true;
  console.log("I made new blocks!")
  }
  objects.forEach(object => {
    object.show(canvas, context, cells);
    if (object instanceof isBlock) {
      object.Rules();
    }
    if(object instanceof SpriteBlock){
      object.move();
      object._win();
    }
  });
}
