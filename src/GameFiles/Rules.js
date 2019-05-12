import {operatorBlocks, spriteBlocks } from "../blocks/BlocksCache.js";


export let Rules = {};

export function setRules() {
operatorBlocks.forEach(block =>{
     Rules[block.ruleOne[0]] = [block.ruleOne[1]];
     Rules[block.ruleTwo[0]] = [block.ruleTwo[1]];
})
applyRules();
}

function applyRules(){
    let rules = Object.values(Rules);
    let names = Object.keys(Rules)
    for(let i = 0 ; i < spriteBlocks.length ; i++ ){
        for(let j = 0 ; j < rules.length  ; j++){
            if(spriteBlocks[i].name===names[j]){
            spriteBlocks[i][rules[j]] = true;
            }
            //console.log(rules[i]);
        }
    }
}