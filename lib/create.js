module.exports = function create(string) {
  const div = document.createElement('div')
  div.innerHTML = string && string.trim()
  return div.firstChild
}
