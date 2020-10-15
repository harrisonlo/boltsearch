const { prepare, search, highlight } = require('../dist/boltsearch.cjs')

test('highlight', () => {
  const text = 'bolt'
  const prepared = prepare(text)
  const targets = [{ text: prepared }]
  const options = { key: 'text' }
  const results = search('bo', targets, options)
  const result = results[0]
  const value = highlight(result, '<span>', '</span>')
  expect(value).toBe('<span>bo</span>lt')
})