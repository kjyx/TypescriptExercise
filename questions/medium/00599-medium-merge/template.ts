type Merge<F extends any, S extends any> = {
    [key in keyof F | keyof S]: key extends keyof S ? S[key] : key extends keyof F ? F[key] : undefined
}

