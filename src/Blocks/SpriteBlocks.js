import Block from "./Block.js";
import { GameInfo } from "../GameFiles/Levels.js";


export class SpriteBlock extends Block {
  constructor(x, y, name) {
    super(x, y, name, "Sprite");
    this.moveBuffer = 0;

    this.you = false;
    this.push = false;
    this.win = false;
    this.stop = false;

    this.right = false;
    this.left = false;
    this.up =false;
    this.down = false;
  }
  show(canvas, context, Cells) {
    context.fillStyle = GameInfo.Sprite[this.name];
    context.fillRect(
      (this.position.x * canvas.width) / Cells,
      (this.position.y * canvas.height) / Cells,
      canvas.width / Cells,
      canvas.height / Cells
    );
  }
  move() {
    if (this.you) {
      if (controls.up) {
        if(!this.up){
        this.position.y--;
        }
      }
      if (controls.left) {
        if(!this.down){
        this.position.y++;
        }
      }
      if (controls.left) {
        if(!this.left){
        this.position.x--;
        }
      }
      if (controls.right) {
        if(!this.adjRight){
        this.position.x++;
        }
      }
    }
    this.left=false;
    this.right=false;
    this.up=false;
    this.down=false;
  }
}
