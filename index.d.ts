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
  type MatchResult = {
    readonly text: string
    readonly score: number
    readonly index: number
    readonly _indexes: number[]
  }
  type MatchesResult = {
    readonly score: number
    readonly matches: MatchResult[]
    readonly index: number
  }
  type SearchResults = MatchResult[] | MatchesResult[]
}

declare interface BoltSearch {
  prepare(target: string): BoltSearch.TextObject
  search(term: string, targets: object[], options: BoltSearch.Options): BoltSearch.SearchResults
  highlight(result: BoltSearch.MatchResult, openTag?: string, closeTag?: string): string
}