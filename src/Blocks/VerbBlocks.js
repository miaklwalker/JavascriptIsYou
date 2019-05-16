import { GameInfo } from "../GameFiles/Levels.js";
import Block from "./Block.js";


export class verbBlock extends Block {
  constructor(x, y, name) {
    super(x, y, name, "verb");
    this.push = true;

  }
  show(canvas, context, cells) {
    context.fillStyle = GameInfo.Text[this.name];
    context.textBaseline = "top";
    context.font = "20px 'arial'";
    context.fillRect(
			(this.position.x * canvas.width) / cells,
			(this.position.y * canvas.height) / cells,
			canvas.width / cells,
			canvas.height / cells,
    );
    context.fillStyle="black";
    context.fillText(
      this.name,
      (this.position.x * canvas.width) / cells+.5,
      (this.position.y * canvas.height) / cells,
      canvas.width / cells
    );
  }
}
