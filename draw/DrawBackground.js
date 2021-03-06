import memoize from '../functions/Cache.js';

function _drawBackground(canvas, color) {
	const background = document.createElement('canvas');
	background.width = canvas.width;
	background.height = canvas.height;
	const ctx = background.getContext('2d');
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, background.width, background.height);
	return background;
}
export let drawBackground = memoize(_drawBackground);
