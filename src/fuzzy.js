function fuzzy(termCodes, prepared) {
  const targetCodes = prepared._codes
  const termLen = termCodes.length
  const targetLen = targetCodes.length
  let termI = 0
  let targetI = 0
  let simpleMatches = []
  let simpleMatchesLen = 0
  let termCode = termCodes[0]

  // Go through term and target codes to find sequential matches.
  // If not all term characters are found, exit fuzzy function with null.
  for (;;) {
    if (termCode === targetCodes[targetI]) {
      simpleMatches[simpleMatchesLen++] = targetI
      ++termI
      if (termI === termLen) break
      termCode = termCodes[termI]
    }
    ++targetI
    if (targetI >= targetLen) return null
  }

  // Target matched all term characters in sequence,
  // move on to strict test to improve the score.
  // Only match consecutive or beginning characters.
  const nextBeginningIndexes = prepared._indexes
  termI = 0
  targetI = 0 // ?
  let strictSuccess = false
  let strictMatches = []
  let strictMatchesLen = 0

  for (;;) {
    if (targetI < targetLen) {
      if (termCodes[termI] === targetCodes[targetI]) {
        strictMatches[strictMatchesLen++] = targetI
        ++termI
        if (termI === termLen) {
          strictSuccess = true
          break
        }
        ++targetI
      }
      else {
        targetI = nextBeginningIndexes[targetI]
      }
    }
    else break
  }

  // Get the score and highlight indexes.
  let matchIndexes
  let matchIndexesLen
  if (strictSuccess) {
    matchIndexes = strictMatches
    matchIndexesLen = strictMatchesLen
  }
  else {
    matchIndexes = simpleMatches
    matchIndexesLen = simpleMatchesLen
  }
  let score = 0
  let lastTargetI = -1
  for (let i = 0; i < termLen; ++i) {
    targetI = matchIndexes[i]
    if (lastTargetI !== targetI - 1) score -= targetI
    lastTargetI = targetI
  }
  if (!strictSuccess) score *= 1000
  score -= targetLen - termLen
  let match = {
    _indexes: [],
    text: prepared.text,
    score
  }
  for (let i = matchIndexesLen - 1; i >= 0; --i) match._indexes[i] = matchIndexes[i]
  return match
}

export default fuzzy