const fuzzy = (searchLowerCodes, prepared) => {
  let searchLowerCode = searchLowerCodes[0]
  let matchesSimple = []
  let matchesStrict = []
  const targetLowerCodes = prepared._codes
  const searchLen = searchLowerCodes.length
  const targetLen = targetLowerCodes.length
  let searchI = 0
  let targetI = 0
  let matchesSimpleLen = 0

  // Remove non-matching targets with basic fuzzy match.
  // Walk through target and find sequential matches.
  // If all chars aren't found then exit.
  for (;;) {
    const isMatch = searchLowerCode === targetLowerCodes[targetI]
    if (isMatch) {
      matchesSimple[matchesSimpleLen++] = targetI
      ++searchI
      if (searchI === searchLen) break
      searchLowerCode = searchLowerCodes[searchI]
    }
    ++targetI
    if (targetI >= targetLen) return null // Failed to find searchI.
  }

  searchI = 0
  let successStrict = false
  let matchesStrictLen = 0

  const nextBeginningIndexes = prepared._indexes

  // Target string successfully matched all characters in sequence.
  // Move on to strict test to improve the score.
  // Only count it as a match if it's consecutive or a beginning character.
  if (targetI !== targetLen) for (;;) {
    // Failed to find a good spot for this search char, 
    // go back to the previous search char and force it forward.
    if (targetI >= targetLen) {
      if (searchI <= 0) break // Failed to push chars forward for a better match.
      --searchI
      const lastMatch = matchesStrict[--matchesStrictLen]
      targetI = nextBeginningIndexes[lastMatch]
    } 
    else {
      const isMatch = searchLowerCodes[searchI] === targetLowerCodes[targetI]
      if (isMatch) {
        matchesStrict[matchesStrictLen++] = targetI
        ++searchI
        if (searchI === searchLen) { 
          successStrict = true
          break 
        }
        ++targetI
      } 
      else {
        targetI = nextBeginningIndexes[targetI]
      }
    }
  }

  // Calculate the score which goes down if they're not consecutive.
  // Keep track of match indexes for highlighting.
  let matchesBest
  let matchesBestLen
  if (successStrict) { 
    matchesBest = matchesStrict
    matchesBestLen = matchesStrictLen 
  }
  else { 
    matchesBest = matchesSimple
    matchesBestLen = matchesSimpleLen 
  }
  let score = 0
  let lastTargetI = -1
  for (let i = 0; i < searchLen; ++i) {
    targetI = matchesBest[i]
    if (lastTargetI !== targetI - 1) score -= targetI
    lastTargetI = targetI
  }
  if (!successStrict) score *= 1000
  score -= targetLen - searchLen
  let match = {
    _indexes: [],
    text: prepared.text,
    score
  }
  for (let i = matchesBestLen - 1; i >= 0; --i) match._indexes[i] = matchesBest[i]
  return match
}

export default fuzzy