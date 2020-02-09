let A_x = 0;
let A_y = 0;

let n = 8;
let side = canvas.width / n;
let board = new Board(n, side, A_x, A_y);

board.draw_board();

document.getElementById("button").addEventListener("click", () => {
  let x = ((2 * Math.floor(Math.random() * 8) + 1) * side) / 2;
  let y = ((2 * Math.floor(Math.random() * 8) + 1) * side) / 2;
  let r = side / 3;

  let queen = new Circle(x, y, r);

  board.draw_board();
  queen.draw_circle();
});
