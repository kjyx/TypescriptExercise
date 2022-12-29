type MyExclude<T, U> = T extends U ? never : T;

type a = MyExclude<"a" | "b" | "c", "a" | "c">;

// js 实现
// function MyExclude(arr1: [], arr2: []) {
//     let arr = [];
//     arr1.forEach((item) => {
//         let find = arr2.find((item1) => item === item1);
//         !`find && arr.push(item);
//     });

//     return arr;
// }


