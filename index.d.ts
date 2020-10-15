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
    readonly index: number
    readonly _indexes: number[]
  }
  type MatchesResult = {
    readonly score: number
    readonly matches: MatchResult[]
    readonly index: number
  }
  type SearchResult = MatchResult[] | MatchesResult[]
}

declare class BoltSearch {
  prepare(target: string): Bolt.TextObject
  search(term: string, targets: object[], options: Bolt.Options): Bolt.SearchResult
  highlight(result: Bolt.MatchResult, openTag?: string, closeTag?: string): string
}

export = BoltSearch