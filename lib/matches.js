'use strict';

module.exports = (node, selector) => {
  const matchesMethod =
    Element.prototype.matches ||
    Element.prototype.matchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector;

  try {
    return matchesMethod.apply(node, [selector]);
  } catch (error) {
    return false;
  }
};
