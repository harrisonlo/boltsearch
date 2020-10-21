function mergeMatch(a, b) {
  if (!a) return b
  if (!b) return a
  return {
    text: a.text,
    indexes: a.indexes.concat(b.indexes.filter(item => a.indexes.indexOf(item) < 0)).sort((a, b) => a - b)
  }
}

function merge(results) {
  let map = {}
  results.forEach(({ weight, results }) => {
    for (let i = results.length -1; i >= 0; --i) {
      const result = results[i]
      const resultI = result.index
      const mapped = map[resultI]
      map[resultI] = {
        index: resultI,
        score: mapped ? mapped.score + result.score * weight : result.score * weight,
        ...(result.match && { 
          match: mapped ? mergeMatch(mapped.match, result.match) : result.match
        }),
        ...(result.matches && { 
          matches: mapped ? mapped.matches.map((match, index) => mergeMatch(match, result.matches[index])) : result.matches
        })
      }
    }
  })
  return Object.values(map).sort((a, b) => b.score - a.score)
}

export default merge