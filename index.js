let A_x = 0;
let A_y = 0;

let n = 8;
let side = canvas.width / n;
let board = new Board(n, side, A_x, A_y);

board.draw_board();
