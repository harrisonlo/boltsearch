function fuzzy (termLowerCodes, prepared) {
  const targetLowerCodes = prepared._codes
  const termLen = termLowerCodes.length
  const targetLen = targetLowerCodes.length
  let termI = 0
  let targetI = 0
  let simpleMatches = []
  let simpleMatchesLen = 0
  let termLowerCode = termLowerCodes[0]
  
  // Go through term and target codes to find sequential matches.
  // If not all term characters are found, exit fuzzy function with null.
  for (;;) {
    if (termLowerCode === targetLowerCodes[targetI]) {
      simpleMatches[simpleMatchesLen++] = targetI
      ++termI
      if (termI === termLen) break
      termLowerCode = termLowerCodes[termI]
    }
    ++targetI
    if (targetI >= targetLen) return null
  }

  // Target matched all term characters in sequence,
  // move on to strict test to improve the score.
  const nextBeginningIndexes = prepared._indexes
  termI = 0
  targetI = 0 // ?
  let strictSuccess = false
  let strictMatches = []
  let strictMatchesLen = 0

  // Only count it as a match if it's consecutive or a beginning character.
  for (;;) {
    if (targetI < targetLen) {
      if (termLowerCodes[termI] === targetLowerCodes[targetI]) {
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

  // Get the score, which goes down if they're not consecutive.
  // Get the match indexes for highlighting.
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