module.exports = () => {
  const timestamp = Date.now();
  return { ctime: timestamp, mtime: timestamp };
};
