import { objects } from "./blockDraw.js";
let oldRules = []
export const Rules = {};

export function setRules() {
  let rules = Object.keys(Rules);
  let verbs = Object.values(Rules);
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].type === "Sprite") {
      for (let j = 0; j < rules.length; j++) {
        if (objects[i].name === rules[j]) {
          objects[i][verbs[j]] = true;
        }
      }
    }
  }
}
export function removeRule(){
  let rules = Object.keys(Rules);
  let verbs = Object.values(Rules);
  rules.forEach(rule=>oldRules.push(rule))
if(oldRules.length===rules.length){
  console.log("They Are Equal!")
  oldRules=[]
}

  console.log(oldRules.length,rules.length);
  console.log(Rules);



  // for (let i = 0; i < objects.length; i++) {
  //   if (objects[i].type === "Sprite") {
  //     for (let j = 0; j < rules.length; j++) {
  //       if (objects[i].name === rules[j]) {
  //         objects[i][verbs[j]] = false;
  //       }
  //     }
  //   }
  // }

}
