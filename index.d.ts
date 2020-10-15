export as namespace BoltSearch

declare var BoltSearch: BoltSearch

export = BoltSearch

declare namespace BoltSearch {
  type TextObject = {
    text: string
    _codes: number[]
    _indexes: number[]
  }
  type Options = {
    threshold?: number
    limit?: number
    key?: string
    keys?: string[]
    weights?: number[]
  }
  type Match = {
    readonly text: string
    readonly _indexes: number[]
  }
  type SearchResult = {
    readonly index: number
    readonly score: number
    readonly match?: Match
    readonly matches?: Match[]
  }
  type SearchResults = SearchResult[]
}

declare interface BoltSearch {
  prepare(target: string): BoltSearch.TextObject
  search(term: string, targets: object[], options: BoltSearch.Options): BoltSearch.SearchResults
  highlight(result: BoltSearch.Match | undefined, openTag?: string, closeTag?: string): string
}