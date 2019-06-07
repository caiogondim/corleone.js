/* global jest, test, expect, beforeEach, afterEach */

const dom = require('../lib')

beforeEach(() => {
  document.body.innerHTML = ''
})

afterEach(() => {
  document.body.innerHTML = ''
})

test('reset style.display if set to none', () => {
  const div = dom.create('<div class="lorem"></div>')
  div.style.display = 'none'
  document.body.appendChild(div)

  dom.show(div)

  expect(div.style.display).toBe('')
})

test('set style.display to default value if still not visible after removing style.display = none', () => {
  const div = dom.create('<div class="lorem" style="none !important;"></div>')
  document.body.appendChild(div)
  const getComputedStyleRef = window.getComputedStyle
  window.getComputedStyle = jest.fn()
  window.getComputedStyle
    .mockReturnValueOnce({ display: 'none' })
    .mockReturnValueOnce({ display: 'block' })

  dom.show(div)

  expect(div.style.display).toBe('block')

  window.getComputedStyle = getComputedStyleRef
})
