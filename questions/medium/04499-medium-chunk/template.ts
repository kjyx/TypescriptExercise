



type Chunk<T extends any[], U extends number, total extends any[] = []> =
    T extends [infer L, ...infer R] ? total['length'] extends U ? [total, ...Chunk<T, U>] : Chunk<R, U, [...total, L]> : total extends [] ? total : [total]

