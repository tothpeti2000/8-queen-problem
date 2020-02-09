let A_x = 0;
let A_y = 0;

let n = 8;
let side = canvas.width / n;
let board = new Board(n, side, A_x, A_y);

board.draw_board();

document.getElementById("button").addEventListener("click", () => {
  let x1 = ((2 * Math.floor(Math.random() * 8) + 1) * side) / 2;
  let y1 = ((2 * Math.floor(Math.random() * 8) + 1) * side) / 2;
  let x2 = ((2 * Math.floor(Math.random() * 8) + 1) * side) / 2;
  let y2 = ((2 * Math.floor(Math.random() * 8) + 1) * side) / 2;
  let r = side / 3;

  let queen_1 = new Circle(x1, y1, r);
  let queen_2 = new Circle(x2, y2, r);

  board.draw_board();
  queen_1.draw_circle();
  queen_2.draw_circle();

  console.log(good_position(queen_1, queen_2));
});
