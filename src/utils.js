export const MAX_SAFE_INTEGER = 9007199254740991

export const getValue = (obj, prop) => {
  const tmp = obj[prop]
  if (tmp !== undefined) return tmp
  let segs = prop
  if (!Array.isArray(prop)) segs = prop.split('.')
  let i = -1
  while (obj && (++i < segs.length)) obj = obj[segs[i]]
  return obj
}

export const getWeightedScore = (matches, weights) => {
  let max = -MAX_SAFE_INTEGER
  for (let i = matches.length - 1; i >= 0; --i) {
    const match = matches[i]
    if (match === null) continue
    const weight = weights[i] || 0
    const score = match.score + weight
    if (score > max) max = score
  }
  if (max === -MAX_SAFE_INTEGER) return null
  return max
}