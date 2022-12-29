type Equals<X,Y> = 
    (<T>() => T extends X ? 1: 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true: false


type Includes<T extends readonly any[], U> = T extends 
        [infer F,...infer R]
        ? Equals<F,U> extends true 
            ? true
            : Includes<R,U> 
        : false



// js 实现
// function Includes(arr, str) {
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (element instanceof Object) {
//              if (str instanceof Object) {
//                 for (const key in element) {
//                     if (element[key] === str[key]) {
//                         return true
//                     } else {
//                         return false
//                     }
//                 }
//              } else {
//                 return false
//              }
//         } else {
//             if (element === str) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }
// }
