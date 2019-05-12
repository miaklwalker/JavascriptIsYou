import Block from "./Block.js";
import { GameInfo } from "../GameFiles/Levels.js";

export default class NounBlock extends Block{
    constructor(x,y,name){
        super(x,y,name,"noun")
		this.push=true;
    }
    show(canvas, context, cells) {
		context.fillStyle = GameInfo.Text[this.name];
		context.textBaseline = 'top';
		context.font = "20px 'arial'";
		context.fillText(
			this.name,
			(this.position.x * canvas.width) / cells + 2,
			(this.position.y * canvas.height) / cells,
			canvas.width / cells,
		);
	}
}