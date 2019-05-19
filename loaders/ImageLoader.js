import memoize from "../functions/cache.js";
import { GameInfo } from "../GameFiles/Levels.js";



function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener("load", () => {
            resolve(image);
        });
        image.src = url;
    });
}

function load([x,y,w,h],color) {
    let location = "../images/Sprites.png";
    let buffer = document.createElement("canvas");
buffer.width = 25;
buffer.height = 25;
let ctx = buffer.getContext("2d");
    
    loadImage(location)
    .then(img =>{ 
        ctx.clearRect(0,0,25,25)
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 25,25);
        ctx.globalCompositeOperation = 'destination-in'
        ctx.drawImage(img,x,y,w,h,0,0,25,25)
        ctx.globalCompositeOperation = 'darken'
        ctx.drawImage(img,x,y,w,h,0,0,25,25)

    
    });
       
      return buffer
}

export let loader = memoize(load)
// BABA = img, 0, 0,25,24,0,0,25,25
//