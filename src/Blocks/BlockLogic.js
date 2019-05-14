import { nounBlocks, verbBlocks, operatorBlocks, spriteBlocks } from "../blocks/BlocksCache.js";

export function blockLogic(){
      nounLogic();
      verbLogic();
      operatorLogic();
      spriteLogic();
}
function nounLogic(){
      nounBlocks.forEach(blocks=>{

      })
}
function verbLogic(){
      verbBlocks.forEach(blocks=>{
            
      })
}
function operatorLogic(){
      operatorBlocks.forEach(block=>{
            block.rules()
      })
}
function spriteLogic(){
      spriteBlocks.forEach(block=>{
            //block.move();
      })
}