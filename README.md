<p align="center">
  <img src="https://harrisonlo.github.io/boltsearch/cover.svg">
</p>

# Welcome

[![Version](https://img.shields.io/npm/v/boltsearch.svg)](https://www.npmjs.com/package/boltsearch)
[![Size](https://img.shields.io/bundlephobia/minzip/boltsearch)](https://www.npmjs.com/package/boltsearch)
[![Issues](https://img.shields.io/github/issues/harrisonlo/boltsearch)](https://github.com/harrisonlo/boltsearch/issues)
[![License](https://img.shields.io/npm/l/boltsearch)](https://github.com/harrisonlo/boltsearch/blob/master/LICENSE)

Bolt is a fuzzy search library with a focus on speed and memory efficiency. ([deprecated](https://github.com/harrisonlo/boltsearch#update))

## Features
- Fuzzy match
- Highlighting
- Multiple fields
- Multiple search terms
- Weighted search
- Multilingual support
- TypeScript support
- Zero dependency
- Tiny bundle

## Demo
https://harrisonlo.github.io/boltsearch

## Quickstart

### npm
```
npm install boltsearch
```
### yarn
```
yarn add boltsearch
```
### Follow the [simple](https://github.com/harrisonlo/boltsearch/blob/master/demo/src/examples/Simple.tsx) example
```javascript
import { prepare, search, highlight } from 'boltsearch'

const words = ['lightning', 'bolt']

const prepared = words.map(word => ({ text: prepare(word) }))

const results = search('bo', prepared, { key: 'text' })

highlight(results[0]) // <b>bo</b>lt

```

# API

| Function | Description |
| --- | --- |
| **prepare**(string): prepared | returns the prepared object for search |
| **search**(string, targets, options): results | returns an array of ranked results |
| **highlight**(result, openTag?, closeTag?): string | returns an HTML string |

## Search options ([example usage](https://github.com/harrisonlo/boltsearch/blob/master/demo/src/examples/Complex.tsx))
```
{
  key: string
  keys: string[]
  weights: number[]
  threshold: number (0 - 100)
  limit: number
}
```

### Keys
Use a dot notation to indicate nested fields.
```
{
  keys: ['parent.child']
}
```

### Weights
Make sure there is an equal number of weights and keys. 
```
{
  keys: ['title', 'description'],
  weights: [100, 10]
}
```
i.e. `title` is weighted 100, `description` is weighted 10

### Threshold
Set the minimum score of returned results. Scores are numbered from 0 to 100.
```
{
  threshold: 10
}
```

### Limit
Set the maximum number of returned results.
```
{
  limit: 50
}
```
# Languages
- Latin-based characters are normalized by default.
- Chinese and Japanese punctuation marks are recognized for basic "tokenization."

# Learn more
## Under the hood
Instead of creating a hashmap-like index of all your strings, like most other search libraries, Bolt uses an alternative approach to search based on the preparation of [char codes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt).
In JavaScript, and thus the browser, when strings are compared, they are first converted to char codes. In the context of search, this operation can quickly add up.

By preparing the char codes of search targets beforehand, Bolt eliminated a much repeated step in the V8 engine, while still able to identify fuzzy matches very quickly. It also uses much less memory as one character only maps to one number. Try out the [demo](https://harrisonlo.github.io/boltsearch), where the 'Simple' example has over 775K characters, and the 'Complex' example with multiple keys has over 200K characters.

## Trade-off
Bolt is optimized for large lists of small to medium sized strings, ideally done on the client-side. Beyond a certain target size, the "char code" approach will start to incur more latency compared to the usual indexing approach.
That said, both approaches can be used at the same time, where the server returns a subcollection of documents and the client quickly ranks them using Bolt.

# Update
## Deprecated
Alas, in less than a month after I released this library, I've found a better way to implement search yet again. Props to [@lucaong](https://github.com/lucaong)'s [minisearch](https://github.com/lucaong/minisearch) library, which uses even less memory with a [radix tree](https://en.wikipedia.org/wiki/Radix_tree) data structure. It also has higher search accuracy using the complete edit distance algorithm. There is no highlighting feature in it, but you can use [highlight-words-core](https://www.npmjs.com/package/highlight-words-core) to supplement it. In my benchmark test, Bolt still appears to be faster with shorter length search terms, but the difference is quite unnoticeable and I'd trade that in for less memory usage and more search accuracy.
