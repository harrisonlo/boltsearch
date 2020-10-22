const { prepare, search } = require('../dist/boltsearch.cjs')

test('search', () => {
  const text = 'bolt'
  const prepared = prepare(text)
  const targets = [{ text: prepared }]
  const options = { key: 'text' }
  const results = search('bo', targets, options)
  expect(results).toHaveLength(1)
  expect(results[0]).toHaveProperty('index')
  expect(results[0]).toHaveProperty('score')
  expect(results[0]).toHaveProperty('match')
  expect(results[0].match).toHaveProperty('text')
  expect(results[0].match).toHaveProperty('indexes')
  expect(results[0].index).toBe(0)
})

test('search with multiple fields', () => {
  const text1 = 'lightning'
  const text2 = 'bolt'
  const prepared1 = prepare(text1)
  const prepared2 = prepare(text2)
  const targets = [{ text1: prepared1, text2: prepared2 }]
  const options = { keys: ['text1', 'text2'] }
  const results = search('l', targets, options)
  expect(results).toHaveLength(1)
  expect(results[0]).toHaveProperty('index')
  expect(results[0]).toHaveProperty('score')
  expect(results[0]).toHaveProperty('matches')
  expect(results[0].matches).toHaveLength(2)
})