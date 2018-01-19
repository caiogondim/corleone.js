const dom = require('../lib')

test('return coordinates relative to document', () => {
  const div = dom.create('<div class="lorem" />')
  document.body.appendChild(div)
  const offset = dom.offset(div)

  expect(offset).toEqual({ top: 0, left: 0 })
})
