export function collisionHelper(actor, ctx, canvas, cells) {
	ctx.strokeStyle = 'blue';
	ctx.strokeRect(
		(actor.position.x * canvas.width) / cells,
		(actor.position.y * canvas.width) / cells,
		canvas.width / cells,
		1,
	);
	ctx.strokeStyle = 'red';
	ctx.strokeRect(
		(actor.position.x * canvas.width) / cells,
		(actor.position.y * canvas.width) / cells,
		1,
		canvas.width / cells,
	);
	ctx.strokeStyle = 'purple';
	ctx.strokeRect(
		(actor.position.x * canvas.width) / cells,
		(actor.position.y * canvas.width) / cells + canvas.width / cells,
		canvas.width / cells,
		1,
	);
	ctx.strokeStyle = 'green';
	ctx.strokeRect(
		(actor.position.x * canvas.width) / cells + canvas.width / cells,
		(actor.position.y * canvas.width) / cells,
		1,
		canvas.width / cells,
	);
}
