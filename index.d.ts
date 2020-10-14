declare namespace Bolt {
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
    readonly indexes: number[]
    readonly payload?: any
  }
  type MatchesResult = {
    readonly score: number
    readonly matches: MatchResult[]
    readonly payload?: any
  }
  type SearchResult = MatchResult | MatchesResult
}

declare class Bolt {
  prepare(target: string): TextObject
  search(term: string, targets: object[], options: Options): SearchResult[]
  highlight(result: MatchResult, openTag?: string, closeTag?: string): string
}

export = Bolt