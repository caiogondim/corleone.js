const dom = require('../lib')

beforeEach(() => {
  document.body.innerHTML = ''
})

afterEach(() => {
  document.body.innerHTML = ''
})

test('remove element from DOM', () => {
  const div = dom.create('<div class="lorem" />')
  document.body.appendChild(div)

  expect(dom.queryAll('.lorem').length).toBe(1)

  dom.remove(div)

  expect(dom.queryAll('.lorem').length).toBe(0)
})

test('dont break if element is not on DOM', () => {
  expect(dom.remove({})).toBe(undefined)
})
