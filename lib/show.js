const safeChain = require('safe-chain')
const memoize = require('fast-memoize')
const domRemove = require('./remove')

const getDefaultDisplay = memoize(el => {
  const tmpEl = document.createElement(el.nodeName)
  document.body.appendChild(tmpEl)
  const display = getComputedStyle(tmpEl).display
  domRemove(tmpEl)

  return display
})

function getPrevDisplay(el) {
  return safeChain(el, 'dataset.__corleonePrevDisplay__')
}

module.exports = function show(el) {
  if (el.style.display.indexOf('none') === 0) {
    el.style.display = ''
  }

  const prevDisplay = getPrevDisplay(el)
  if (prevDisplay) {
    el.style.display = prevDisplay
    return
  }

  if (getComputedStyle(el).display === 'none') {
    el.style.display = `${getDefaultDisplay(el)} !important`
    return
  }
}
