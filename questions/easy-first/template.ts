// ts实现
type First<T extends unknown[]> = T["length"] extends 0 ? never : T[0];

// js实现
// function First(T){
//     if(T instanceof Array && T.length > 0){
//         return T[0]
//     }
// }
