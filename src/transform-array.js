const { NotImplementedError } = require("../lib");
/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const cloneArr = [...arr];
  const arrPrefix = [
    "--double-next",
    "--double-prev",
    "--discard-next",
    "--discard-prev",
  ];

  for (let i = 0; i < cloneArr.length; i++) {
    switch (cloneArr[i]) {
      case "--double-next":
        cloneArr[i + 1]
          ? cloneArr.splice(i, 1, cloneArr[i + 1])
          : cloneArr.splice(i, 1);
        break;
      case "--double-prev":
        cloneArr[i - 1]
          ? cloneArr.splice(i, 1, cloneArr[i - 1])
          : cloneArr.splice(i, 1);
        break;
      case "--discard-next":
        cloneArr[i + 1] ? cloneArr.splice(i + 1, 1) : cloneArr.splice(i, 1);
        break;
      case "--discard-prev":
        cloneArr[i - 1] ? cloneArr.splice(i - 1, 1) : cloneArr.splice(i, 1);
        break;
    }
  }

  return cloneArr.filter((n) => !arrPrefix.includes(n));
}

module.exports = {
  transform,
};
