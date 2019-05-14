import { Vector } from "../Math/Vector.js";


export default class Block {
    constructor(x, y, name, type) {
        this.position = new Vector(x,y);
        this.name = name;
        this.type = type;
        this.shove = new Vector(0,0);
    }
    onMessage(msg){
        console.info(`Message From : ${msg.from} . Message To ${msg.to} : called from ${this.name} Type: ${msg.type} Data: ${msg.data} `)
    }
}
