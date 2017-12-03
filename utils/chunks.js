module.exports = (arr, chunksize = 3) => arr
  .map((e, i) => i % chunksize === 0 && arr.slice(i, i + chunksize))
  .filter(e => e);
