export const separators = [' ', '！', '？', '，', '。', '、', '…']
export const separatorCodes = [...separators.map(str => str.charCodeAt(0))]

export function parse(obj, prop) {
  const tmp = obj[prop]
  if (tmp !== undefined) return tmp
  let segs = prop
  if (!Array.isArray(prop)) segs = prop.split('.')
  let i = -1
  while (obj && (++i < segs.length)) obj = obj[segs[i]]
  return obj
}

export function sanitize(unsafe) {
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