const { NotImplementedError } = require("../lib");
/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";
  if (!(date instanceof Date)) throw new Error("Invalid date!");
  if (!date) throw new Error("Invalid date!");
  if (date.hasOwnProperty("toString")) throw new Error("Invalid date!");

  let month = date.getMonth();

  if (month < 0 || month > 12) throw new Error("Invalid date!");

  if (month === 0 || month === 1 || month === 11) {
    return "winter";
  } else if (10 >= month && month >= 8) {
    return "autumn";
  } else if (8 >= month && month >= 5) {
    return "summer";
  } else if (4 >= month && month > 1) {
    return "spring";
  }
}

module.exports = {
  getSeason,
};
