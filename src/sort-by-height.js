const { NotImplementedError } = require("../lib");
/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const res = [];
  const sortArr = [];

  for (let num of arr) {
    if (num !== -1) sortArr.push(num);
  }

  sortArr.sort((a, b) => (a > b ? 1 : -1));

  console.log(sortArr);
  for (let num of arr) {
    num === -1 ? res.push(num) : res.push(sortArr.shift());
  }

  return res;
}

module.exports = {
  sortByHeight,
};
