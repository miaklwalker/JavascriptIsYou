import Block from "./Block.js";
import { GameInfo } from "../GameFiles/Levels.js";


export class SpriteBlock extends Block {
    constructor(x, y, name) {
        super(x, y, name, "Sprite");
        
    }
    show(canvas, context, Cells) {
        context.fillStyle = GameInfo.Sprite[this.name];
        context.fillRect(
            (this.position.x * canvas.width) / Cells,
            (this.position.y * canvas.height) / Cells,
            canvas.width / Cells,
            canvas.height / Cells,
        );
    }
}
