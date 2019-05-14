import { allBlocks } from "../blocks/BlocksCache.js";

export class MessageQueue{
      constructor(){
            this.messages=[];
            this.entities = []
      }
      add(msg){
            this.messages.push(msg);
      }
      addEntities(){
            for(let i = 0 ; i < 3;i++){
                  allBlocks[i].forEach(block=>this.entities.push(block));
            }
      }
      dispatch(){
            for(let i = 0 ; i < this.messages.length ; i++){
                  let msg = this.messages[i];
                  let entity =msg.to;
                  this.entities.forEach(block=>{
                        if(block.name === entity){
                              block.onMessage(msg);
                        }
                  })
                  this.messages.splice(i,1);
            }
      }
}