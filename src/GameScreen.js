import { cache } from "./index.js";

export function drawBackground(size, color) {
  if (cache.has(size)) {
    return cache.get(size);
  } else {
    const background = document.createElement("canvas");
    background.width = size;
    background.height = size;
    const ctx = background.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, background.width, background.height);
    cache.set(size, background);
    return background;
  }
}

export function drawGrid(height, width, cells) {
  const grid = document.createElement("canvas");
  const ctx = grid.getContext("2d");
  grid.height = height;
  grid.width = width;
  if (cache.has([height, width, cells])) {
    return cache.get([height, width, cells]);
  } else {
    for (let i = 0; i < height; i += height / cells) {
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(height, i);
      ctx.closePath();
      ctx.stroke();
    }
    for (let i = 0; i < width; i += width / cells) {
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, width);
      ctx.closePath();
      ctx.stroke();
    }
    cache.set([height, width, cells]);
  }
  return grid;
}
