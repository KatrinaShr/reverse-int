module.exports = function reverse (n) {
  return String(n).split('').filter(item => /\d/.test(item)).reverse().join('');
}
