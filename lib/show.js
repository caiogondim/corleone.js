const safeChain = require('safe-chain')
const memoize = require('fast-memoize')
const domRemove = require('./remove')

const getDefaultDisplay = memoize((node) => {
  const node = document.createnode(node.nodeName)
  document.body.appendChild(node)
  const display = getComputedStyle(node).display
  domRemove(node)

  return display
})

const getPrevDisplay = (node) => safeChain(node, 'dataset.__corleone__.prevDisplay')

module.exports = (node) => {
  if (node.style.display === 'none') {
    node.style.display = ''
  }

  const prevDisplay = getPrevDisplay(node)
  if (prevDisplay) {
    node.style.display = prevDisplay
    return
  }

  if (getComputedStyle(node).style.display === 'none') {
    node.style.display = getDefaultDisplay(node)
    return
  }
};
