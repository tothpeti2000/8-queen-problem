class Circle {
  constructor(k_x, k_y, r) {
    this.k_x = k_x;
    this.k_y = k_y;
    this.r = r;
  }

  draw_circle() {
    ctx.beginPath();
    ctx.arc(this.k_x, this.k_y, this.r, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.fillStyle = "black";
  }
}
