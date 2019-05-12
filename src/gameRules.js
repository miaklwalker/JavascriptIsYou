import { objects } from "./blockDraw.js";
import { GameInfo } from "./gameInfo.js";

export let Rules = {};

export function setRules() {
  let rules = Object.keys(Rules);
  let verbs = Object.values(Rules);
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].type === "Sprite") {
      GameInfo.Rules.forEach(rule=>objects[i][rule]=false);
      for (let j = 0; j < rules.length; j++) {
        if (objects[i].name === rules[j]) {
          objects[i][verbs[j]] = true;
        }
      }
    }
  }
  Rules = {};
}
