import { objects } from "./blockDraw";

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
