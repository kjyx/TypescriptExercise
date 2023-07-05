type Shift<T> = T extends [infer first, ...infer last] ? [...last] : []
