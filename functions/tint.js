/*
All Sprites are black & white 
This is a very simple tint function 
to add custom color to sprites
*/
export default function tint([x, y, w, h], img, color, ctx) {
	ctx.clearRect(0, 0, 25, 25);
	ctx.globalCompositeOperation = 'source-over';
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, 25, 25);
	ctx.globalCompositeOperation = 'destination-in';
	ctx.drawImage(img, x, y, w, h, 0, 0, 25, 25);
	ctx.globalCompositeOperation = 'darken';
	ctx.drawImage(img, x, y, w, h, 0, 0, 25, 25);
}
