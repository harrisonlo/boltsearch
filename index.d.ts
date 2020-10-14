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
    readonly _indexes: number[]
    readonly text: string
    readonly score: number
    readonly index: number
  }
  type MatchesResult = {
    readonly score: number
    readonly matches: MatchResult[]
    readonly index: number
  }
  type SearchResult = MatchResult | MatchesResult
}

declare class BoltSearch {
  prepare(target: string): TextObject
  search(term: string, targets: object[], options: Options): SearchResult[]
  highlight(result: MatchResult, openTag?: string, closeTag?: string): string
}

export = BoltSearch