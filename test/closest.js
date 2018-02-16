const dom = require('../lib')

test('gets closest parent that matches selector', () => {
  const el = dom.create(`
    <div class="foo">
      <div class="bar" />
    </div>
  `)
  document.body.appendChild(el)

  expect(dom.closest(dom.query('.bar', el), '.foo')).toEqual(el)

  dom.remove(el)
})

test('returns null if a match doesnt happen', () => {
  const el = dom.create(`
    <div class="foo">
      <div class="bar" />
    </div>
  `)
  document.body.appendChild(el)

  expect(dom.closest(el, '.qux')).toEqual(null)

  dom.remove(el)
})

test('early return if element is not on DOM', () => {
  const el = dom.create(`
    <div class="foo">
      <div class="bar" />
    </div>
  `)

  expect(dom.closest(el, '.foo')).toEqual(null)
})
