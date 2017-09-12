module.exports = (split = false) => {
  try {
    return new Date().toLocaleString();
  } catch (err) {
    let result = '';
    let splitter = split ? '/' : '';
    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate() < 10
      ? `0${date.getDate()}`
      : date.getDate();
    const month = date.getMonth() < 9
      ? `0${date.getMonth() + 1}`
      : date.getMonth() + 1;
    result = `${year}${splitter}${month}${splitter}${day}`;
    const hours = date.getHours() < 10
      ? `0${date.getHours()}`
      : date.getHours();
    const minutes = date.getMinutes() < 10
      ? `0${date.getMinutes()}`
      : date.getMinutes();
    const seconds = date.getSeconds() < 10
      ? `0${date.getSeconds()}`
      : date.getSeconds();
    splitter = split ? ':' : '';
    const space = split ? ' ' : '';
    return `${result}${space}${hours}${splitter}${minutes}${splitter}${seconds}`;
  }
};
