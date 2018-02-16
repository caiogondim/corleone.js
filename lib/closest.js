const matches = require('./matches')

module.exports = function closest(node, selector) {
  if (!document.documentElement.contains(node)) return null;

  let curNode = node;
  while (curNode !== null) {
    if (matches(curNode, selector)) return curNode;
    curNode = curNode.parentElement || curNode.parentNode;
  }

  return null;
};
