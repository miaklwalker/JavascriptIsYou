import { Level } from "../Main";
import { GameInfo } from "../GameFiles/Levels";

export function win(){
      Level.num++
      GameInfo.drawn.level = false;
}