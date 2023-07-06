
// 2023/7/6 9:31
type BEM<B extends string, E extends string[], M extends string[]> = E['length'] extends 0 ? `${B}--${M[number]}` : M['length'] extends 0 ? `${B}__${E[number]}` : `${B}__${E[number]}--${M[number]}`