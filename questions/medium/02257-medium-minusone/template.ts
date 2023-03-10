

type createArr<T, V extends any[] = []> = T extends V['length'] ? V : createArr<T, [...V, 1]>


type MinusOne<T extends number> = createArr<T> extends [infer L, ...infer R] ? R['length'] : -1
type lllll = MinusOne<999>