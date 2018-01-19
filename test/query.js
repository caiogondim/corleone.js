const dom = require('../lib')

test('works as an alias for document.querySelector', () => {
  document.body.innerHTML = `
    <div class="foo">
      <div id="bar">
      </div>
    </div>
  `

  expect(window.document.querySelector('.foo')).toEqual(dom.query('.foo'))

  document.body.innerHTML = ''
})

test('accepts document dependency as argument', () => {
  document.body.innerHTML = `
    <div class="foo">
      <div id="bar">
      </div>
    </div>
  `

  expect(window.document.querySelector('.foo'))
    .toEqual(dom.query('.foo', window.document));

  document.body.innerHTML = ''
})
