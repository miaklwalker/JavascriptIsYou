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
      operatorBlocks.forEach(blocks=>{
            
      })
}
function spriteLogic(){
      console.log(spriteBlocks)
      spriteBlocks.forEach(block=>{
                  console.log('block');
                  block.you=true;
            block.move();
      })
}