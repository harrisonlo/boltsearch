export const MAX_SAFE_INTEGER = 9007199254740991

export const separators = [' ', '！', '？', '，', '。', '、', '…']
export const separatorCodes = [...separators.map(str => str.charCodeAt(0))]

export function getValue(obj, prop) {
  const tmp = obj[prop]
  if (tmp !== undefined) return tmp
  let segs = prop
  if (!Array.isArray(prop)) segs = prop.split('.')
  let i = -1
  while (obj && (++i < segs.length)) obj = obj[segs[i]]
  return obj
}

export function applyWeights(matches, weights) {
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

export function escapeHTML(unsafe) {
  return unsafe.replace(/[&<"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '"':
        return '&quot;'
      default:
        return '&#039;'
    }
  })
}

export function mergeMatch(a, b) {
  if (!a) return b
  if (!b) return a
  return {
    text: a.text,
    _indexes: a._indexes.concat(b._indexes.filter(item => a._indexes.indexOf(item) < 0)).sort((a, b) => a - b)
  }
}