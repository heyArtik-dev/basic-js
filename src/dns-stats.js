const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsCount = {};

  // Loop through each domain
  domains.forEach(domain => {
      // Split the domain into parts and reverse it
      const parts = domain.split('.').reverse();

      // Create subdomains
      let subdomain = '';
      for (let i = 0; i < parts.length; i++) {
          // Construct the subdomain
          subdomain += '.' + parts[i];

          // If the subdomain already exists in the count object, increment it, otherwise initialize to 1
          if (dnsCount[subdomain]) {
              dnsCount[subdomain]++;
          } else {
              dnsCount[subdomain] = 1;
          }
      }
  });

  return dnsCount;
}

module.exports = {
  getDNSStats
};
