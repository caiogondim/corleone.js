'use strict';

const memoize = require('fast-memoize')

const getDefaultDisplay = memoize(nodeName => {
  const element = document.createElement(nodeName);
  document.body.appendChild(element);
  const display = getComputedStyle(element, '').display;
  element.parentNode.removeChild(element);

  return display;
});

module.exports = function show(element) {
  if (element.style.display === 'none') {
    element.style.display = '';
  }

  if (getComputedStyle(element).display === 'none') {
    element.style.display = getDefaultDisplay(element.nodeName);
  }
};
