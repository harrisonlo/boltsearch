(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.boltsearch = {}));
}(this, (function (exports) { 'use strict';

  function prepareLowerCodes (target) {
    let lowerCodes = [];
    for (let i = 0; i < target.length; ++i) lowerCodes[i] = target.toLowerCase().charCodeAt(i);
    return lowerCodes
  }

  function prepareBeginningIndexes (target) {
    let beginningIndexes = [];
    let beginningIndexesLen = 0;
    let wasUpper = false;
    let wasAlphanum = false;
    for (let i = 0; i < target.length; ++i) {
      const targetCode = target.charCodeAt(i);
      const isUpper = targetCode >= 65 && targetCode <= 90;
      const isAlphanum = isUpper || targetCode >= 97 && targetCode <= 122 || targetCode >= 48 && targetCode <= 57;
      const isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum;
      wasUpper = isUpper;
      wasAlphanum = isAlphanum;
      if (isBeginning) beginningIndexes[beginningIndexesLen++] = i;
    }
    return beginningIndexes
  }

  function prepareNextBeginningIndexes (target) {
    let beginningIndexes = prepareBeginningIndexes(target);
    let nextBeginningIndexes = [];
    let lastIsBeginning = beginningIndexes[0];
    let lastIsBeginningI = 0;
    for (let i = 0; i < target.length; ++i) {
      if (lastIsBeginning > i) {
        nextBeginningIndexes[i] = lastIsBeginning;
      }
      else {
        lastIsBeginning = beginningIndexes[++lastIsBeginningI];
        nextBeginningIndexes[i] = lastIsBeginning === undefined ? target.length : lastIsBeginning;
      }
    }
    return nextBeginningIndexes
  }

  function prepare (target) {
    if (!target) return {
      text: '',
      _codes: [],
      _indexes: []
    }
    return {
      text: target,
      _codes: prepareLowerCodes(target),
      _indexes: prepareNextBeginningIndexes(target)
    }
  }

  // https://github.com/lemire/FastPriorityQueue.js
  const queue = function(){var r=[],o=0,e={};function n(){for(var e=0,n=r[e],c=1;c<o;){var f=c+1;e=c,f<o&&r[f].score<r[c].score&&(e=f),r[e-1>>1]=r[e],c=1+(e<<1);}for(var a=e-1>>1;e>0&&n.score<r[a].score;a=(e=a)-1>>1)r[e]=r[a];r[e]=n;}return e.add=function(e){var n=o;r[o++]=e;for(var c=n-1>>1;n>0&&e.score<r[c].score;c=(n=c)-1>>1)r[n]=r[c];r[n]=e;},e.poll=function(){if(0!==o){var e=r[0];return r[0]=r[--o],n(),e}},e.peek=function(e){if(0!==o)return r[0]},e.replaceTop=function(o){r[0]=o,n();},e};

  function fuzzy (termLowerCodes, prepared) {
    const targetLowerCodes = prepared._codes;
    const termLen = termLowerCodes.length;
    const targetLen = targetLowerCodes.length;
    let termI = 0;
    let targetI = 0;
    let simpleMatches = [];
    let simpleMatchesLen = 0;
    let termLowerCode = termLowerCodes[0];
    
    // Go through term and target codes to find sequential matches.
    // If not all term characters are found, exit fuzzy function with null.
    for (;;) {
      if (termLowerCode === targetLowerCodes[targetI]) {
        simpleMatches[simpleMatchesLen++] = targetI;
        ++termI;
        if (termI === termLen) break
        termLowerCode = termLowerCodes[termI];
      }
      ++targetI;
      if (targetI >= targetLen) return null
    }

    // Target matched all term characters in sequence,
    // move on to strict test to improve the score.
    const nextBeginningIndexes = prepared._indexes;
    termI = 0;
    targetI = 0; // ?
    let strictSuccess = false;
    let strictMatches = [];
    let strictMatchesLen = 0;

    // Only count it as a match if it's consecutive or a beginning character.
    for (;;) {
      if (targetI < targetLen) {
        if (termLowerCodes[termI] === targetLowerCodes[targetI]) {
          strictMatches[strictMatchesLen++] = targetI;
          ++termI;
          if (termI === termLen) { 
            strictSuccess = true;
            break 
          }
          ++targetI;
        } 
        else {
          targetI = nextBeginningIndexes[targetI];
        }
      }
      else break
    }

    // Get the score, which goes down if they're not consecutive.
    // Get the match indexes for highlighting.
    let matchIndexes;
    let matchIndexesLen;
    if (strictSuccess) { 
      matchIndexes = strictMatches;
      matchIndexesLen = strictMatchesLen; 
    }
    else { 
      matchIndexes = simpleMatches;
      matchIndexesLen = simpleMatchesLen; 
    }
    let score = 0;
    let lastTargetI = -1;
    for (let i = 0; i < termLen; ++i) {
      targetI = matchIndexes[i];
      if (lastTargetI !== targetI - 1) score -= targetI;
      lastTargetI = targetI;
    }
    if (!strictSuccess) score *= 1000;
    score -= targetLen - termLen;
    let match = {
      _indexes: [],
      text: prepared.text,
      score
    };
    for (let i = matchIndexesLen - 1; i >= 0; --i) match._indexes[i] = matchIndexes[i];
    return match
  }

  const MAX_SAFE_INTEGER = 9007199254740991;

  function getValue (obj, prop) {
    const tmp = obj[prop];
    if (tmp !== undefined) return tmp
    let segs = prop;
    if (!Array.isArray(prop)) segs = prop.split('.');
    let i = -1;
    while (obj && (++i < segs.length)) obj = obj[segs[i]];
    return obj
  }

  function getWeightedScore (matches, weights) {
    let max = -MAX_SAFE_INTEGER;
    for (let i = matches.length - 1; i >= 0; --i) {
      const match = matches[i];
      if (match === null) continue
      const weight = weights[i] || 0;
      const score = match.score + weight;
      if (score > max) max = score;
    }
    if (max === -MAX_SAFE_INTEGER) return null
    return max
  }

  function search (term, targets, options) {
    if (!term) return []
    const termLowerCodes = prepareLowerCodes(term);
    
    const q = queue();

    const threshold = options.threshold || -MAX_SAFE_INTEGER;
    const limit = options.limit || MAX_SAFE_INTEGER;
    
    let resultsCount = 0;

    if (options.key) {
      for (let i = targets.length - 1; i >= 0; --i) {
        const target = targets[i];
        const prepared = getValue(target, options.key);    
         
        if (!prepared || !prepared._codes || !prepared._indexes) continue 

        let match = fuzzy(termLowerCodes, prepared);
        if (match === null) continue
        if (match.score < threshold) continue

        const result = {
          index: i,
          score: match.score,
          match: {
            text: match.text,
            _indexes: match._indexes,
          }
        };

        if (resultsCount < limit) { 
          ++resultsCount;
          q.add(result);
        }
        else {
          if (result.score > q.peek().score) q.replaceTop(result);
        }
      }
    }

    if (options.keys) {    
      for (let i = targets.length - 1; i >= 0; --i) {
        const target = targets[i];

        let matches = [];
        for (let keyI = options.keys.length - 1; keyI >= 0; --keyI) {
          const prepared = getValue(target, options.keys[keyI]);
          
          if (!prepared || !prepared._codes || !prepared._indexes) { 
            matches[keyI] = null;
            continue 
          }

          matches[keyI] = fuzzy(termLowerCodes, prepared);
        }

        const score = getWeightedScore(matches, options.weights || []);
        if (score === null) continue
        if (score < threshold) continue

        const result = { 
          index: i,
          score, 
          matches
        };

        if (resultsCount < limit) { 
          ++resultsCount;
          q.add(result);
        }
        else {
          if (result.score > q.peek().score) q.replaceTop(result);
        }
      }
    } 
    
    if (resultsCount === 0) return []
    let results = [];
    for (let i = resultsCount - 1; i >= 0; --i) results[i] = q.poll();
    return results
  }

  function highlight (result, openTag, closeTag) {
    if (result === null) return null
    if (result === undefined) return null
    if (openTag === undefined) openTag = '<b>';
    if (closeTag === undefined) closeTag = '</b>';

    let highlighted = '';
    let matchesIndex = 0;
    let opened = false;
    
    const target = result.text;
    const matchesBest = result._indexes;
    
    for (let i = 0; i < target.length; ++i) {
      const char = target[i];
      if (matchesBest[matchesIndex] === i) {
        ++matchesIndex;
        if (!opened) {
          opened = true;
          highlighted += openTag;
        }
        if (matchesIndex === matchesBest.length) {
          highlighted += char + closeTag + target.substr(i + 1);
          break
        }
      } 
      else {
        if (opened) {
          opened = false;
          highlighted += closeTag;
        }
      }
      highlighted += char;
    }
    
    return highlighted
  }

  exports.highlight = highlight;
  exports.prepare = prepare;
  exports.search = search;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
