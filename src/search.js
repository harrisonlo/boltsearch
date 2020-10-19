import queue from './queue'
import fuzzy from './fuzzy'
import { prepareLowerCodes } from './prepare'
import { getValue, getWeightedScore, mergeMatch, MAX_SAFE_INTEGER } from './utils'

function search(term, targets, options) {
  if (!term) return []
  const termLowerCodes = prepareLowerCodes(term)

  const q = queue()

  const threshold = options.threshold || -MAX_SAFE_INTEGER
  const limit = options.limit || MAX_SAFE_INTEGER

  let resultsCount = 0

  if (options.key) {
    for (let i = targets.length - 1; i >= 0; --i) {
      const target = targets[i]
      const prepared = getValue(target, options.key)

      if (!prepared || !prepared._codes || !prepared._indexes) continue

      let match = fuzzy(termLowerCodes, prepared)
      if (match === null) continue
      if (match.score < threshold) continue

      const result = {
        index: i,
        score: match.score,
        match: {
          text: match.text,
          _indexes: match._indexes,
        }
      }

      if (resultsCount < limit) {
        ++resultsCount
        q.add(result)
      }
      else {
        if (result.score > q.peek().score) q.replaceTop(result)
      }
    }
  }

  if (options.keys) {
    for (let i = targets.length - 1; i >= 0; --i) {
      const target = targets[i]

      let matches = []
      for (let keyI = options.keys.length - 1; keyI >= 0; --keyI) {
        const prepared = getValue(target, options.keys[keyI])

        if (!prepared || !prepared._codes || !prepared._indexes) {
          matches[keyI] = null
          continue
        }

        matches[keyI] = fuzzy(termLowerCodes, prepared)
      }

      const score = getWeightedScore(matches, options.weights || [])
      if (score === null) continue
      if (score < threshold) continue

      const result = {
        index: i,
        score,
        matches
      }

      if (resultsCount < limit) {
        ++resultsCount
        q.add(result)
      }
      else {
        if (result.score > q.peek().score) q.replaceTop(result)
      }
    }
  }

  if (resultsCount === 0) return []
  let results = []
  for (let i = resultsCount - 1; i >= 0; --i) results[i] = q.poll()
  return results
}

function process(term, targets, options) {
  let values = term.trim().replace(/\s+/g,' ').split(' ')
  if (values.length === 1) return search(values[0], targets, options)
  else {
    if (values.includes('&')) values.push('and')
    if (values.includes('and')) values.push('&')
    values = [...new Set(values)]
    const results = values.flatMap(term => search(term, targets, options))
    let map = {}
    for (let i = results.length -1; i >= 0; --i) {
      const result = results[i]
      const resultI = result.index
      const mapped = map[resultI]
      map[resultI] = {
        index: resultI,
        score: (mapped && mapped.score > result.score) ? mapped.score : result.score,
        ...(result.match && { 
          match: mapped 
            ? mergeMatch(mapped.match, result.match) 
            : result.match 
        }),
        ...(result.matches && { 
          matches: mapped 
            ? mapped.matches.map((match, index) => mergeMatch(match, result.matches[index]) ) 
            : result.matches 
        })
      }
    }
    return Object.values(map).sort((a, b) => b.score - a.score)
  }
}

export default process