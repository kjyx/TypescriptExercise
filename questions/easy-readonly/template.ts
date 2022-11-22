// type obj = string | boolean | number | undefined | null | Function;

// type MyReadonly<T> = {
//     readonly [key in keyof T]: T[key] extends obj ? T[key] : MyReadonly<T[key]>;
// };

type MyReadonly<T> = {
    readonly [key in keyof T]: T[key];
};


// js 实现