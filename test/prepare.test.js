import prepare from '../src/prepare'

test('prepare', () => {
  const text = 'bolt'
  const prepared = prepare(text)
  expect(prepared).toHaveProperty('text')
  expect(prepared).toHaveProperty('_codes')
  expect(prepared).toHaveProperty('_indexes')
})