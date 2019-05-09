import { Block } from "./Block";
import { GameInfo } from "../gameInfo.js";

export class verbBlock extends Block {
  constructor(x, y, name, type) {
    super(x, y, name, type);
  }
  show(canvas, context, cells) {
    context.fillStyle = GameInfo.Text[this.name];
    context.textBaseline = "top";
    context.font = "20px 'arial'";
    context.fillText(
      this.name,
      (this.position.x * canvas.width) / cells + 2,
      (this.position.y * canvas.height) / cells,
      canvas.width / cells
    );
  }
}
