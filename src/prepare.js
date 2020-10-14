export const prepareLowerCodes = (target) => {
  let lowerCodes = []
  for (let i = 0; i < target.length; ++i) lowerCodes[i] = target.toLowerCase().charCodeAt(i)
  return lowerCodes
}

const prepareBeginningIndexes = (target) => {
  let beginningIndexes = []
  let beginningIndexesLen = 0
  let wasUpper = false
  let wasAlphanum = false
  for (let i = 0; i < target.length; ++i) {
    const targetCode = target.charCodeAt(i)
    const isUpper = targetCode >= 65 && targetCode <= 90
    const isAlphanum = isUpper || targetCode >= 97 && targetCode <= 122 || targetCode >= 48 && targetCode <= 57
    const isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum
    wasUpper = isUpper
    wasAlphanum = isAlphanum
    if (isBeginning) beginningIndexes[beginningIndexesLen++] = i
  }
  return beginningIndexes
}

const prepareNextBeginningIndexes = (target) => {
  let beginningIndexes = prepareBeginningIndexes(target)
  let nextBeginningIndexes = []
  let lastIsBeginning = beginningIndexes[0]
  let lastIsBeginningI = 0
  for (let i = 0; i < target.length; ++i) {
    if (lastIsBeginning > i) {
      nextBeginningIndexes[i] = lastIsBeginning
    }
    else {
      lastIsBeginning = beginningIndexes[++lastIsBeginningI]
      nextBeginningIndexes[i] = lastIsBeginning === undefined ? target.length : lastIsBeginning
    }
  }
  return nextBeginningIndexes
}

const prepare = (target) => {
  if (!target) return
  return {
    text: target,
    _codes: prepareLowerCodes(target),
    _indexes: prepareNextBeginningIndexes(target),
  }
}

export default prepare