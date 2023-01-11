type Flatten<T extends any[], arr extends any[] = []> = T extends [infer L, ...infer R] ? (L extends any[] ? Flatten<[...L, ...R], arr> : Flatten<R, [...arr, L]>) : arr;

type ppp = Flatten<[1, 2, [3, 4], [[[5]]]]>;