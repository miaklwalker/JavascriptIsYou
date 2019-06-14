import memoize from "../functions/Cache.js";
function _gridGuide(canvas, cells) {
  const grid = document.createElement("canvas");
  const ctx = grid.getContext("2d");
  let j = 1;
  grid.height = canvas.height;
  grid.width = canvas.width;
  for (let i = 0; i < grid.height; i += grid.height / cells) {
    ctx.fillStyle = "red";
    ctx.font = "20px 'arial'";
    ctx.fillText(`${j}`, i, 20);
    j++;
  }
  j = 1;
  for (let i = 0; i < grid.height; i += grid.height / cells) {
    ctx.fillStyle = "red";
    ctx.font = "20px 'arial'";
    ctx.fillText(`${j}`, 0, i + 20);
    j++;
  }

  return grid;
}
export let gridGuide = memoize(_gridGuide);
