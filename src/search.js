import queue from './queue'
import fuzzy from './fuzzy'
import merge from './merge'
import { prepareCodes } from './prepare'
import { parse } from './utils'

function search(term, targets, options) {
  if (!term) return []
  const termCodes = prepareCodes(term)

  const q = queue()

  const threshold = options.threshold || 0
  const limit = options.limit || targets.length

  let resultsCount = 0

  if (options.key) {
    for (let i = targets.length - 1; i >= 0; --i) {
      const target = targets[i]
      const prepared = parse(target, options.key)

      if (!prepared || !prepared._codes) continue

      let match = fuzzy(termCodes, prepared)
      if (match === null) continue
      if (match.score < threshold) continue

      const result = {
        index: i,
        score: match.score,
        match: {
          text: match.text,
          indexes: match.indexes,
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
        const prepared = parse(target, options.keys[keyI])

        if (!prepared || !prepared._codes) {
          matches[keyI] = null
          continue
        }

        matches[keyI] = fuzzy(termCodes, prepared)
      }

      const sum = options.weights ? options.weights.reduce((a, b) => a + b, 0) : options.keys.length
      const score = matches.reduce((score, match, index) => {
        if (match === null) return score
        if (options.weights) return score + (match.score * options.weights[index] / sum)
        return score + (match.score / sum)
      }, 0)

      if (score === null) continue
      if (score < threshold) continue

      const result = {
        index: i,
        score,
        matches: matches.map(match => ({ text: match.text, indexes: match.indexes }))
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
  let words = term.trim().replace(/\s+/g,' ').split(' ')
  if (words.length === 1) return search(words[0], targets, options)
  else {
    words = [...new Set(words)]
    const sum = words.reduce((a, b) => a + b.length, 0)
    const results = words.map(term => ({ 
      weight: term.length / sum, 
      results: search(term, targets, options) 
    }))
    return merge(results, options.limit)
  }
}

export default process