/* global test, expect */

const dom = require('../lib')

test('work as an alias for Element.prototype.matches', () => {
  const el = dom.create(`
    <div class="foo">
      <div class="bar" />
    </div>
  `)
  document.body.appendChild(el)

  expect(dom.matches(el, '.foo')).toEqual(true)

  dom.remove(el)
})
