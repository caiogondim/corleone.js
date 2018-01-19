const dom = require('../lib')

test('reset style.display if set to none', () => {
  const div = dom.create('<div class="lorem" style="none !important;"></div>')
  document.body.appendChild(div)

  dom.show(div)

  expect(div.style.display).toBe('')
})
