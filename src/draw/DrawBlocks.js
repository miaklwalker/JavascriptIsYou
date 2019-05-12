import { GameInfo } from "../GameFiles/Levels.js";
import { nounBlocks, verbBlocks, operatorBlocks, spriteBlocks } from "../blocks/BlocksCache.js";

export function drawBlocks(canvas, context, cells) {
    if(GameInfo.drawn){
        drawNouns(canvas,context,cells);
        drawVerbs(canvas,context,cells);
        drawOperators(canvas,context,cells);
        drawSprites(canvas,context,cells);
    }
 
}
function drawNouns(canvas,context,cells){
    nounBlocks.forEach(block =>{
        block.show(canvas,context,cells);
    })
}
function drawVerbs(canvas,context,cells){
    verbBlocks.forEach(block =>{
        block.show(canvas,context,cells);
    })

}
function drawOperators(canvas,context,cells){
    operatorBlocks.forEach(block =>{
        block.show(canvas,context,cells);
    })

}
function drawSprites(canvas,context,cells){
    spriteBlocks.forEach(block =>{
        block.show(canvas,context,cells);
    })

}