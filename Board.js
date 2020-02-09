const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Board {
  constructor(n, side, starting_point_x, starting_point_y) {
    this.n = n;
    this.side = side;
    this.starting_point_x = starting_point_x;
    this.starting_point_y = starting_point_y;
  }

  draw_board() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Rows
    for (let i = 0; i < n; i++) {
      //Columns
      for (let j = 0; j < n; j++) {
        if ((i % 2 === 0 && j % 2 === 0) || (i % 2 != 0 && j % 2 != 0)) {
          ctx.fillRect(
            this.starting_point_x + j * side,
            this.starting_point_y + i * side,
            this.side,
            this.side
          );
        } else {
          ctx.rect(
            this.starting_point_x + j * side,
            this.starting_point_y + i * side,
            this.side,
            this.side
          );
        }
      }
    }
  }
}
