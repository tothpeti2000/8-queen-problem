const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Square {
  constructor(x0, y0, size) {
    this.starting_point = new Point(x0, y0);
    this.size = size;
  }

  draw_square(color) {
    ctx.moveTo(this.starting_point.x, this.starting_point.y);
    ctx.lineTo(this.starting_point.x + this.size, this.starting_point.y);
    ctx.lineTo(
      this.starting_point.x + this.size,
      this.starting_point.y + this.size
    );
    ctx.lineTo(this.starting_point.x, this.starting_point.y + this.size);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
  }

  draw_map(n) {
    //Rows
    for (let i = 1; i <= n; i++) {
      //Columns
      for (let j = 1; j <= n; j++) {
        i % 2 === 0 ? this.draw_square("black") : this.draw_square("white");
        this.starting_point.x += this.size + 10;
      }
    }
  }
}
