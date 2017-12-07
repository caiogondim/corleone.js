module.exports = (node) => {
  const rect = node.getBoundingClientRect()
  return {
    top: (rect.top + window.pageYOffset) - window.document.documentElement.clientTop,
    left: (rect.left + window.pageXOffset) - window.document.documentElement.clientLeft
  }
}
