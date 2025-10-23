const { NotImplementedError } = require("../lib");
/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // Create frequency maps for both strings
  const count1 = {};
  const count2 = {};

  // Count characters in the first string
  for (const char of s1) {
    count1[char] = (count1[char] || 0) + 1;
  }

  // Count characters in the second string
  for (const char of s2) {
    count2[char] = (count2[char] || 0) + 1;
  }

  // Calculate the number of common characters
  let commonCount = 0;
  for (const char in count1) {
    if (count2[char]) {
      commonCount += Math.min(count1[char], count2[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
