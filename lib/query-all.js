module.exports = function queryAll(query, el) {
  el = el || document
  return el.querySelectorAll(query)
}
