const { NotImplementedError } = require("../lib");
/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = "";
  str = String(str);

  if (!options.repeatTimes) options.repeatTimes = 1;

  for (let i = 0; i < options.repeatTimes; i++) {
    res += str;

    if (
      options.additionRepeatTimes &&
      typeof options.additionRepeatTimes === "number"
    ) {
      if (!options.separator) options.separator = "+";
      if (!options.additionSeparator) options.additionSeparator = "|";

      for (let j = 0; j < options.additionRepeatTimes; j++) {
        if (j === options.additionRepeatTimes - 1) {
          res += options.addition;
          break;
        } else {
          res += options.addition;
          res += options.additionSeparator;
        }
      }
    } else {
      if (options.addition) {
        options.addition = String(options.addition);

        if (i === options.repeatTimes - 1 && options.repeatTimes !== 1) {
          res += options.addition;
          break;
        } else {
          res += options.addition;
        }
      }
    }

    if (!options.separator) {
      if (i === options.repeatTimes - 1) {
        break;
      } else {
        res += "+";
      }
    } else {
      if (i === options.repeatTimes - 1) {
        break;
      } else {
        res += options.separator;
      }
    }
  }

  return res;
}

module.exports = {
  repeater,
};
