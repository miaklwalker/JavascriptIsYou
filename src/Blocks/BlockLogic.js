import { nounBlocks, verbBlocks, operatorBlocks, spriteBlocks } from "../blocks/BlocksCache.js";

export function blockLogic(){
      operatorLogic();
}

function operatorLogic(){
      operatorBlocks.forEach(block=>{
            block.rules()
      })
}
