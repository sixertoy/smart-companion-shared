module.exports = (arr, chunksize = 3) => {
  if (!arr || !Array.isArray(arr)) throw new Error('Not an array');
  return arr
    .map((e, i) => i % chunksize === 0 && arr.slice(i, i + chunksize))
    .filter(e => e);
};
