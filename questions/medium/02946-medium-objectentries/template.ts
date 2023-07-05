
type RemoveUndefined<U> = U extends undefined ? never : U

type ObjectEntries<T> = {
  [P in keyof T]-?: [P, Exclude<keyof T, P> extends never ? T[P] : RemoveUndefined<T[P]>]
}[keyof T] 