

// 方法一
type GreaterThan<T extends number, U extends number, R extends any[] = []> = 
        T extends R['length'] ? false : U extends R['length'] ? true : GreaterThan<T, U, [...R, 1]>;



// 方法二
// type newArr<A, Arr extends any[] = []> = Arr['length'] extends A ? Arr : newArr<A, [...Arr, '']>

// type Greater<T extends any[], U extends any[]> = U extends [...T, ...any] ? false : true

// type GreaterThan<T extends number, U extends number> = Greater<newArr<T>, newArr<U>>
