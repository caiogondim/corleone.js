'use strict';

module.exports = function offset(el) {
  const rect = el.getBoundingClientRect()
  return {
    top: rect.top + window.pageYOffset - window.document.documentElement.clientTop,
    left: rect.left + window.pageXOffset - window.document.documentElement.clientLeft
  }
}
