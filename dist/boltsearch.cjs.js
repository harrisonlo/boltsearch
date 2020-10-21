'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function prepareCodes(target) {
  let lowerCodes = [];
  for (let i = 0; i < target.length; ++i) {
    lowerCodes[i] = target
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .charCodeAt(i);
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

// https://github.com/lemire/FastPriorityQueue.js
const queue = function(){var r=[],o=0,e={};function n(){for(var e=0,n=r[e],c=1;c<o;){var f=c+1;e=c,f<o&&r[f].score<r[c].score&&(e=f),r[e-1>>1]=r[e],c=1+(e<<1);}for(var a=e-1>>1;e>0&&n.score<r[a].score;a=(e=a)-1>>1)r[e]=r[a];r[e]=n;}return e.add=function(e){var n=o;r[o++]=e;for(var c=n-1>>1;n>0&&e.score<r[c].score;c=(n=c)-1>>1)r[n]=r[c];r[n]=e;},e.poll=function(){if(0!==o){var e=r[0];return r[0]=r[--o],n(),e}},e.peek=function(e){if(0!==o)return r[0]},e.replaceTop=function(o){r[0]=o,n();},e};

const separators = [' ', '！', '？', '，', '。', '、', '…'];
const separatorCodes = [...separators.map(str => str.charCodeAt(0))];

function parse(obj, prop) {
  const tmp = obj[prop];
  if (tmp !== undefined) return tmp
  let segs = prop;
  if (!Array.isArray(prop)) segs = prop.split('.');
  let i = -1;
  while (obj && (++i < segs.length)) obj = obj[segs[i]];
  return obj
}

function sanitize(unsafe) {
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

function fuzzy(termCodes, prepared) {
  const targetCodes = prepared._codes;
  const termLen = termCodes.length;
  const targetLen = targetCodes.length;
  let termI = 0;
  let targetI = 0;
  let termCode = termCodes[0];

  // Keep records of matches and best matches
  let matches = [];
  let matchesLen = 0;
  let matchesSkipLen = 0;
  let bestMatches = [];
  let bestMatchesLen = 0;
  let bestMatchesSkipLen = 0;
  for (;;) {
    if (termCode === targetCodes[targetI]) {
      matches[matchesLen++] = targetI;
      ++termI;
      if (termI === termLen) {
        // Exact match, exit check.
        bestMatches = matches;
        bestMatchesLen = matchesLen;
        bestMatchesSkipLen = matchesSkipLen;
        break
      }
      termCode = termCodes[termI];
    }
    else {
      ++matchesSkipLen;
      // If target code is a separator, reset term index.
      if (separatorCodes.includes(targetCodes[targetI])) {
        termI = 0;
        termCode = termCodes[termI];
        matches = [];
        matchesLen = 0;
        matchesSkipLen = 0;
      }
    }
    if (matchesLen > 0) {
      // If same number are matched but with fewer skips, make it the best.
      if (matchesLen === bestMatchesLen) {
        if (matchesSkipLen < bestMatchesSkipLen) {
          bestMatches = matches;
          bestMatchesLen = matchesLen;
          bestMatchesSkipLen = matchesSkipLen;
        }
      }
      // If more are matched, make it the best.
      if (matchesLen > bestMatchesLen) {
        bestMatches = matches;
        bestMatchesLen = matchesLen;
        bestMatchesSkipLen = matchesSkipLen;
      }
    }
    ++targetI;
    if (targetI >= targetLen) break
  }

  // Calculate the score.
  let score = 0;

  // 80 points for percentage of term matched.
  score += (bestMatchesLen / termLen) * 80;

  // 10 points for how consecutive the matches are.
  score += bestMatchesLen ? 10 - (bestMatchesSkipLen / termLen) : 0;

  // 10 points for how close it is to the beginning.
  score += bestMatchesLen ? 10 - (bestMatches[0] / (targetLen - 1)) : 0;

  let match = {
    score,
    text: prepared.text,
    indexes: bestMatches
  };
  return match
}

function mergeScore(a, b) {
  if (a === b) return a
  if (a > b) return a + (b / 10)
  if (b > a) return b + (a / 10)
}

function mergeMatch(a, b) {
  if (!a) return b
  if (!b) return a
  return {
    text: a.text,
    indexes: a.indexes.concat(b.indexes.filter(item => a.indexes.indexOf(item) < 0)).sort((a, b) => a - b)
  }
}

function merge(results) {
  let map = {};
  for (let i = results.length -1; i >= 0; --i) {
    const result = results[i];
    const resultI = result.index;
    const mapped = map[resultI];
    map[resultI] = {
      index: resultI,
      score: mapped ? mergeScore(mapped.score, result.score) : result.score,
      ...(result.match && { 
        match: mapped ? mergeMatch(mapped.match, result.match) : result.match
      }),
      ...(result.matches && { 
        matches: mapped ? mapped.matches.map((match, index) => mergeMatch(match, result.matches[index])) : result.matches
      })
    };
  }
  return Object.values(map).sort((a, b) => b.score - a.score)
}

function search(term, targets, options) {
  if (!term) return []
  const termCodes = prepareCodes(term);

  const q = queue();

  const threshold = options.threshold || 0;
  const limit = options.limit || targets.length;

  let resultsCount = 0;

  if (options.key) {
    for (let i = targets.length - 1; i >= 0; --i) {
      const target = targets[i];
      const prepared = parse(target, options.key);

      if (!prepared || !prepared._codes) continue

      let match = fuzzy(termCodes, prepared);
      if (match === null) continue
      if (match.score < threshold) continue

      const result = {
        index: i,
        score: match.score,
        match: {
          text: match.text,
          indexes: match.indexes,
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
        const prepared = parse(target, options.keys[keyI]);

        if (!prepared || !prepared._codes) {
          matches[keyI] = null;
          continue
        }

        matches[keyI] = fuzzy(termCodes, prepared);
      }

      const totalWeight = options.weights ? options.weights.reduce((a, b) => a + b, 0) : options.keys.length;
      const totalScore = matches.reduce((score, match, index) => {
        if (match === null) return score
        if (options.weights) return score + (match.score * options.weights[index] / totalWeight)
        return score + (match.score / totalWeight)
      }, 0);

      const score = totalScore / options.keys.length;
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

function process(term, targets, options) {
  let words = term.trim().replace(/\s+/g,' ').split(' ');
  if (words.length === 1) return search(words[0], targets, options)
  else {
    // Handle ampersands
    if (words.includes('&')) words.push('and');

    // Search multiple words
    words = [...new Set(words)];
    const results = words.flatMap(term => search(term, targets, options));
    return merge(results)
  }
}

function highlight(result, openTag, closeTag) {
  if (result === null) return null
  if (result === undefined) return null
  if (openTag === undefined) openTag = '<b>';
  if (closeTag === undefined) closeTag = '</b>';

  let highlighted = '';
  let matchesIndex = 0;
  let opened = false;

  const target = result.text;
  const matchIndexes = result.indexes;

  for (let i = 0; i < target.length; ++i) {
    const char = sanitize(target[i]);
    if (matchIndexes[matchesIndex] === i) {
      ++matchesIndex;
      if (!opened) {
        opened = true;
        highlighted += openTag;
      }
      if (matchesIndex === matchIndexes.length) {
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
exports.search = process;
