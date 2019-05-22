export default function gameWin(){
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'black';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'gold';
      context.font = '128px , sans';
      context.fillText('YOU WIN!', canvas.width / 2-40, canvas.height / 2);
}