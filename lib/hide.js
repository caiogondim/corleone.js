module.exports = (node) => {
  node.dataset.__corleone__.prevDisplay = node.style.display
  node.style.display = 'none'
}
