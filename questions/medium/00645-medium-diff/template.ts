type MyMerge<F extends any, S extends any> = {
    [key in keyof F | keyof S]: key extends keyof S ? S[key] : key extends keyof F ? F[key] : undefined
}

/*  合并两个对象 相同字段会合并（MyMerge<O, O1>）, 然后找出两个对象相同的字段（Extract<keyof O, keyof O1>），吧这两个相同的字段去除掉（Omit<>） */
type Diff<O, O1> = Omit<MyMerge<O, O1>, Extract<keyof O, keyof O1>>
