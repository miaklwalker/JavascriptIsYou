import memoize from "../functions/Cache.js";
function _drawGrid(canvas, cells) {
  const grid = document.createElement("canvas");
  const ctx = grid.getContext("2d");
  grid.height = canvas.height;
  grid.width = canvas.width;
  for (let i = 0; i < grid.height; i += grid.height / cells) {
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(grid.height, i);
    ctx.closePath();
    ctx.stroke();
  }
  for (let i = 0; i < grid.width; i += grid.width / cells) {
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, grid.width);
    ctx.closePath();
    ctx.stroke();
  }
  return grid;
}
export let drawGrid = memoize(_drawGrid);
