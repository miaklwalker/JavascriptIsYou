import { Block } from "./Block.js";
import { GameInfo } from "../gameInfo.js";
import { controls } from "../Controls.js";
import { objects } from "../blockDraw.js";
import { Level, Drawn } from "../index.js";
import { collisionHelper } from "../debug.js";
let frame = 0 ;
export class SpriteBlock extends Block {
  constructor(x, y, name, type) {
    super(x, y, name, type);
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
    collisionHelper(this,context,canvas,Cells);
  }
  move() {


    if (this.you) {
      //console.log(this.right,this.left,this.up,this.down);
      if (controls.KeyW === true || controls.ArrowUp === true) {
        if(!this.up){
        this.position.y -= 1;
        }
      }
      if (controls.KeyS === true || controls.ArrowDown === true) {
        if(!this.down){
        this.position.y += 1;
        }
      }
      if (controls.KeyA === true || controls.ArrowLeft === true) {
        if(!this.left){
        this.position.x -= 1;
        }
      }
      if (controls.KeyD === true || controls.ArrowRight === true) {
        if(!this.right){
        this.position.x += 1;
        }
      }
    }
    this.left=false;
    this.right=false;
    this.up=false;
    this.down=false;
  }
  //todo
  push(){}
  stop(){}
  _win(){
    if(this.win){
      objects.forEach(object=>{
        if(object.type === "Sprite"){
          if(object.position.same(this.position)&&object.you===true){
            console.log("You Win!")
           console.log(Level.Num++);
           Drawn[0]=false;
           Drawn[1]=false;
          }
        }
      })
    }
  }

}
