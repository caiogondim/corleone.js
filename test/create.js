const dom = require('../lib')

test('creates an HTML element from a string', () => {
  const element = dom.create(`
    <div class="foo">
      <div class="bar" />
    </div>
  `)

  expect(element instanceof HTMLElement).toBeTruthy()
  expect(element.constructor).toBe(HTMLDivElement)
})
