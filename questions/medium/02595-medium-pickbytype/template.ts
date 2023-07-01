type PickByType<T, U> = {
    [key in keyof T as T[key] extends U ? key : never]: T[key]
}

interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}


type aaaaa = PickByType<Model, boolean>