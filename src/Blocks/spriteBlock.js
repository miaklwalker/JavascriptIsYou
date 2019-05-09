import { Block } from "./Block";
import { GameInfo } from "../gameInfo.js";
import { controls } from "../Controls.js";

export class SpriteBlock extends Block {
  constructor(x, y, name, type) {
    super(x, y, name, type);
    this.you = false;
    this.push = false;
    this.win = false;
    this.stop = false;
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
      if (controls.KeyW === true || controls.ArrowUp === true) {
        this.position.y -= 1;
      }
      if (controls.KeyS === true || controls.ArrowDown === true) {
        this.position.y += 1;
      }
      if (controls.KeyA === true || controls.ArrowLeft === true) {
        this.position.x -= 1;
      }
      if (controls.KeyD === true || controls.ArrowRight === true) {
        this.position.x += 1;
      }
    }
  }
}
