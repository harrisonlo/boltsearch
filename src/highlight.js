import { sanitize } from './utils'

function highlight(result, openTag, closeTag) {
  if (result === null) return null
  if (result === undefined) return null
  if (openTag === undefined) openTag = '<b>'
  if (closeTag === undefined) closeTag = '</b>'

  let highlighted = ''
  let matchesIndex = 0
  let opened = false

  const target = result.text
  const matchIndexes = result.indexes

  for (let i = 0; i < target.length; ++i) {
    const char = sanitize(target[i])
    if (matchIndexes[matchesIndex] === i) {
      ++matchesIndex
      if (!opened) {
        opened = true
        highlighted += openTag
      }
      if (matchesIndex === matchIndexes.length) {
        highlighted += char + closeTag + target.substr(i + 1)
        break
      }
    }
    else {
      if (opened) {
        opened = false
        highlighted += closeTag
      }
    }
    highlighted += char
  }

  return highlighted
}

export default highlight