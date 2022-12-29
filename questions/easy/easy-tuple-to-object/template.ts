// ts实现
type TupleToObject<T extends readonly (string | number)[]> = {
    [K in T[number]]: K;
};

// js 实现
// function TupleToObject(T) {
//     if (!(T instanceof Array)) return;
//     let obj = {};
//     for (let i = 0; i < T.length; i++) {
//         if (T[i] instanceof Array || T[i] instanceof Object) {
//             throw new Error("");
//         }
//         obj[T[i]] = T[i];
//     }

//     return obj;
// }
