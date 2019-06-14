import memoize from "../functions/Cache.js";
import tint from "../functions/tint.js";

function loadImage(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener("load", () => {
      resolve(image);
    });
    image.src = url;
  });
}

function load([x, y, w, h], color) {
  let location = "https://raw.githubusercontent.com/miaklwalker/JavascriptIsYou/master/images/Sprites.png";
  let buffer = document.createElement("canvas");
  buffer.width = 25;
  buffer.height = 25;
  let ctx = buffer.getContext("2d");

  loadImage(location).then(img => {
    tint([x, y, w, h], img, color, ctx);
  });

  return buffer;
}
export let loader = memoize(load);
