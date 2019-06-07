/* global test, expect, beforeEach, afterEach */

const dom = require('../lib')

beforeEach(() => {
  document.body.innerHTML = ''
})

afterEach(() => {
  document.body.innerHTML = ''
})

test('works as an alias for document.querySelectorAll', () => {
  document.body.innerHTML = `
    <div class="foo">
      <div id="foo" />
    </div>
  `

  expect(document.querySelectorAll('.foo')).toEqual(dom.queryAll('.foo'))

  document.body.innerHTML = ''
})

test('accepts node to be queried into', () => {
  document.body.innerHTML = `
    <div class="foo">
      <div id="bar">
      </div>
    </div>
  `

  expect(document.querySelectorAll('.foo'))
    .toEqual(dom.queryAll('.foo', window.document))

  document.body.innerHTML = ''
})
