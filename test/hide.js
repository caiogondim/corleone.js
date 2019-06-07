/* global test, expect */

const dom = require('../lib')

test('hides element', () => {
  const el = dom.create(`
    <div class="foo">
      <div class="bar" />
    </div>
  `)

  dom.hide(el)
  expect(el.style.display).toEqual('none')
})
