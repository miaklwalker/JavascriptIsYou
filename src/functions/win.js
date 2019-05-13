import { Level } from "../Main.js";
import { GameInfo } from "../GameFiles/Levels.js";
import { controls } from "./Controls.js";
import { Restart } from "./Restart.js";

export function win(){
      Level.num++
      GameInfo.drawn.level = false;
      console.log("You Win!")
      Restart(true)
      
}