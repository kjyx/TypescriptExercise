
// ts 实现
type MyPick<T, K extends keyof T> = {
    [key in K]: T[key];
};

// js 实现

// function MyPick(T, K) {
//     let obj = {};
//     for (let key in K) {
//         if (key in T) {
//             obj[key] = T[key];
//         }
//     }

//     return obj;
// }
