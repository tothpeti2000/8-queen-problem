function good_position(queen_1, queen_2) {
  if (
    queen_1.k_x === queen_2.k_x ||
    queen_1.k_y === queen_2.k_y ||
    Math.abs(queen_1.k_x - queen_2.k_x) === Math.abs(queen_2.k_y - queen_1.k_y)
  ) {
    return false;
  }

  return true;
}
