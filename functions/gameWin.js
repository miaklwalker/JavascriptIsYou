export default function gameWin(canvas, context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "gold";
  context.font = "128px , fantasy";
  context.fillText("YOU WIN!", canvas.width / 2 - 40, canvas.height / 2);
  context.fillText(
    "Click anywhere to play again!",
    canvas.width / 2 - 80,
    canvas.height / 2 + 20
  );
  document.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
    removeEventListener("click");
  });
}
