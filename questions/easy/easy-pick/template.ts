
// ts 实现
type MyPick<T, K extends keyof T> = {
    [key in K]: T[key];
};

interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type ffffff = MyPick<Todo,'title'>

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
