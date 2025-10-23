const { NotImplementedError } = require("../lib");
/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let start = email.lastIndexOf("@") + 1;
  return email.substring(start);
}

module.exports = {
  getEmailDomain,
};
