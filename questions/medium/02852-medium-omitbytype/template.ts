
type OmitByType<T extends object, U> = {
    [key in keyof T as T[key] extends U ? never : key]: T[key]
};




interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}

type fdsdsa = OmitByType<Model, boolean>