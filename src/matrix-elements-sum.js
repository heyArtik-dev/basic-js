const { NotImplementedError } = require("../lib");
/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  for (let i = matrix.length - 1; i > 0; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i - 1][j] !== 0) {
        matrix[i - 1][j] += matrix[i][j];
      }
    }
  }
  return matrix[0].reduce((acc, v) => acc + v);
}

module.exports = {
  getMatrixElementsSum,
};
