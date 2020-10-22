const { prepare } = require('../dist/boltsearch.cjs')

test('prepare', () => {
  const text = 'bolt'
  const prepared = prepare(text)
  expect(prepared).toHaveProperty('text')
  expect(prepared).toHaveProperty('_codes')
})