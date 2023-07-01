
type IntersectionToObj<T> = {
    [K in keyof T]: T[K]
}

type PartialByKeys<T, K extends keyof T = keyof T> = IntersectionToObj<Partial<Pick<T, Extract<keyof T, K>>> & Pick<T, Exclude<keyof T, K>>>



interface User {
    name?: string
    age: number
    address: string
}

type asdsaffds = PartialByKeys<User, 'name' | 'age'>