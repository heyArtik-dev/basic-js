const { NotImplementedError } = require("../lib");
/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mines = [];
  let countMines = 0;

  for (let i = 0; i < matrix.length; i++) {
    mines.push([]);

    for (let j = 0; j < matrix[i].length; j++) {
      let topLeft, top, topRight, left, right, botLeft, bot, botRight;

      countMines = 0;

      if (matrix[i - 1]) {
        if (matrix[i - 1][j - 1]) topLeft = matrix[i - 1][j - 1];
        if (matrix[i - 1][j]) top = matrix[i - 1][j];
        if (matrix[i - 1][j + 1]) topRight = matrix[i - 1][j + 1];

        if (topLeft === true) countMines++;
        if (top === true) countMines++;
        if (topRight === true) countMines++;
      }

      if (matrix[i][j - 1]) {
        left = matrix[i][j - 1];
        if (left === true) countMines++;
      }

      if (matrix[i][j + 1]) {
        right = matrix[i][j + 1];
        if (right === true) countMines++;
      }

      if (matrix[i + 1]) {
        if (matrix[i + 1][j - 1]) botLeft = matrix[i + 1][j - 1];
        if (matrix[i + 1][j]) bot = matrix[i + 1][j];
        if (matrix[i + 1][j + 1]) botRight = matrix[i + 1][j + 1];

        if (botLeft === true) countMines++;
        if (bot === true) countMines++;
        if (botRight === true) countMines++;
      }

      mines[i].push(countMines);
    }
  }

  return mines;
}

module.exports = {
  minesweeper,
};
