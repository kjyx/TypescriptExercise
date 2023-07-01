type RequiredBy<T> ={
    [key in keyof T] : T[key]
}
  
type RequiredByKeys<T, K extends keyof T = keyof T> = RequiredBy<Required<Pick<T,Extract<keyof T,K>>> & Omit<T,K>>;
