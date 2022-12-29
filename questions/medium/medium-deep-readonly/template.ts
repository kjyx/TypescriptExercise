type DeepReadonly<T> = {
    readonly [key in keyof T]: T[key] extends {} ? (T[key] extends () => {} ? T[key] : DeepReadonly<T[key]>) : T[key];
};
