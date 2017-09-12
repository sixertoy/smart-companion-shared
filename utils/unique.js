module.exports = entries =>
    entries.filter((elem, pos, arr) => arr.indexOf(elem) === pos);
