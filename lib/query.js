module.exports = function query(query, el) {
  el = el || document
  return el.querySelector(query)
}
