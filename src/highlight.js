const highlight = (result, openTag, closeTag) => {
  if (result === undefined) return null
  if (openTag === undefined) openTag = '<b>'
  if (closeTag === undefined) closeTag = '</b>'

  let highlighted = ''
  let matchesIndex = 0
  let opened = false
  
  const target = result.text
  const matchesBest = result._indexes
  
  for (let i = 0; i < target.length; ++i) {
    const char = target[i]
    if (matchesBest[matchesIndex] === i) {
      ++matchesIndex
      if (!opened) {
        opened = true
        highlighted += openTag
      }
      if (matchesIndex === matchesBest.length) {
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