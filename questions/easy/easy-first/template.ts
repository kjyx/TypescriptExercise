// ts实现
// type First<T extends unknown[]> = T["length"] extends 0 ? never : T[0];
// type First<T extends unknown[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;

type arr = [1,2,3];

type c = First<arr>;

// js实现
// function First(T){
//     if(T instanceof Array && T.length > 0){
//         return T[0]
//     }
// }
