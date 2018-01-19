module.exports = function hide(el) {
  el.dataset.__corleonePrevDisplay__ = el.style.display
  el.style.display = 'none !important'
}
