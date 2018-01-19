const dom = require('../lib')

test('remove element from DOM', () => {
  const div = dom.create('<div class="lorem" />')
  document.body.appendChild(div)

  expect(dom.queryAll('.lorem').length).toBe(1)

  dom.remove(div)

  expect(dom.queryAll('.lorem').length).toBe(0)
})
