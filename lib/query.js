module.exports = function query(queryStr, el = document) {
  return el.querySelector(queryStr)
}
