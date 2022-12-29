type includeType = string | number | undefined | null | boolean;

// 递归 吧对象所有属性都变成只读的
// type MyReadonly<T> = {
//     readonly [key in keyof T]: T[key] extends includeType ? T[key] : MyReadonly<T[key]>;
// };



// 只把最 对象第一层变成只读的
type MyReadonly<T> = {
    readonly [key in keyof T]: T[key];
};

// interface Todo1 {
//     title: string;
//     description: string;
//     completed: boolean;
//     meta: {
//         author: string;
//     };
// }

// type q = MyReadonly<Todo1>;

// let obj: q = {
//     title: "cc",
//     description: "string",
//     completed: true,
//     meta: {
//         author: "string",
//     },
// };

// obj.meta.author = "111";
