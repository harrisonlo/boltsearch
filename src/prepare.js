export function prepareCodes(target) {
  let lowerCodes = []
  for (let i = 0; i < target.length; ++i) {
    lowerCodes[i] = target
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .charCodeAt(i)
  }
  return lowerCodes
}

function prepare(target) {
  if (!target) return {
    text: '',
    _codes: []
  }
  return {
    text: target,
    _codes: prepareCodes(target)
  }
}

export default prepare