const dom = require('../lib')

test('hides element', () => {
  const el = dom.create(`
    <div class="foo">
      <div class="bar" />
    </div>
  `)

  dom.hide(el)
  expect(el.style.display).toEqual('none !important')
})

test('saves previous style.display value for future use', () => {
  const el = dom.create(`
    <div class="foo" style="display: inline-block;">
      <div class="bar" />
    </div>
  `)

  dom.hide(el)
  expect(el.dataset.__corleonePrevDisplay__).toEqual('inline-block')
})
