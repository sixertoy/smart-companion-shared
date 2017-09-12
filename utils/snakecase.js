const capitalize = require('./capitalize');

module.exports = slug =>
  slug.split('-')
    .map((word, index) => (index > 0 ? capitalize(word) : word))
    .join('');
