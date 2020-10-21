import { separatorCodes } from './utils'

function fuzzy(termCodes, prepared) {
  const targetCodes = prepared._codes
  const termLen = termCodes.length
  const targetLen = targetCodes.length
  let termI = 0
  let targetI = 0
  let termCode = termCodes[0]

  // Keep records of matches and best matches
  let matches = []
  let matchesLen = 0
  let matchesSkipLen = 0
  let bestMatches = []
  let bestMatchesLen = 0
  let bestMatchesSkipLen = 0
  for (;;) {
    if (termCode === targetCodes[targetI]) {
      matches[matchesLen++] = targetI
      ++termI
      if (termI === termLen) {
        // Exact match, exit check.
        bestMatches = matches
        bestMatchesLen = matchesLen
        bestMatchesSkipLen = matchesSkipLen
        break
      }
      termCode = termCodes[termI]
    }
    else {
      ++matchesSkipLen
      // If target code is a separator, reset term index.
      if (separatorCodes.includes(targetCodes[targetI])) {
        termI = 0
        termCode = termCodes[termI]
        matches = []
        matchesLen = 0
        matchesSkipLen = 0
      }
    }
    if (matchesLen > 0) {
      // If same number are matched but with fewer skips, make it the best.
      if (matchesLen === bestMatchesLen) {
        if (matchesSkipLen < bestMatchesSkipLen) {
          bestMatches = matches
          bestMatchesLen = matchesLen
          bestMatchesSkipLen = matchesSkipLen
        }
      }
      // If more are matched, make it the best.
      if (matchesLen > bestMatchesLen) {
        bestMatches = matches
        bestMatchesLen = matchesLen
        bestMatchesSkipLen = matchesSkipLen
      }
    }
    ++targetI
    if (targetI >= targetLen) break
  }

  // Calculate the score.
  let score = 0

  // 80 points for percentage of term matched.
  score += (bestMatchesLen / termLen) * 80

  // 10 points for how consecutive the matches are.
  score += bestMatchesLen ? 10 - (bestMatchesSkipLen / termLen) : 0

  // 10 points for how close it is to the beginning.
  score += bestMatchesLen ? 10 - (bestMatches[0] / (targetLen - 1)) : 0

  let match = {
    score,
    text: prepared.text,
    indexes: bestMatches
  }
  return match
}

export default fuzzy