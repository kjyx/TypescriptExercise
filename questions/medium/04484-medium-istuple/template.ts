
type IsTuple<T extends any> = [T] extends [never] ? false : T extends readonly [number | string | boolean | Object | Function] | [] ? true : false



type ooooo = IsTuple<never>