import { nounBlocks, verbBlocks, operatorBlocks, spriteBlocks } from "../blocks/BlocksCache.js";

export function blockLogic(){
      operatorBlocks.forEach(block=>{
            block.rules()
      })
}
