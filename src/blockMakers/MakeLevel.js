import { GameInfo } from "../GameFiles/Levels.js";
import { makeNounBlocks, makeIsBlocks, makeSpritesBlocks, makeVerbBlocks } from "./MakeBlocks.js";
import { addGroup } from "./MakeGroup.js";

export function makeLevel() {
    if (!GameInfo.drawn.level) {
        addGroup()
        makeNounBlocks();
        makeIsBlocks();
        makeSpritesBlocks();
        makeVerbBlocks();
        GameInfo.drawn.level = true;
    }
}


