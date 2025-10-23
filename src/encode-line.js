const { NotImplementedError } = require("../lib");
/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = "";
  let char,
    count = 0;

  for (let i = 0; i < str.length; i++) {
    if (char !== str[i] && count !== 0) {
      if (count === 1) {
        res += char;
        char = str[i];
      } else {
        res += count.toString() + char;
        char = str[i];
        count = 1;
      }
    } else {
      char = str[i];
      count++;
    }

    if (i === str.length - 1) {
      if (count === 1) {
        res += char;
      } else {
        res += count.toString() + char;
      }
    }
  }

  return res;
}

module.exports = {
  encodeLine,
};
