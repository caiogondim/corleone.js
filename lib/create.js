module.exports = function create(str) {
  const div = document.createElement('div')
  div.innerHTML = str && str.trim()
  return div.firstChild
}
