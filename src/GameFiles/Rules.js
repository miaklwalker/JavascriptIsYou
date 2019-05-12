import { objects } from "./blockDraw.js";
import { GameInfo } from "./gameInfo.js";
import { operatorBlocks } from "../Blocks/BlocksCache.js";

export let Rules = {};

export function setRules() {
operatorBlocks.forEach(block=>{
     Rules[block.ruleOne[0]] = [block.rule[1]];
})
}
