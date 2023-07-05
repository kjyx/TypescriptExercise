

type TupleToNestedObject<T extends Array<any>, U> =
    T extends [infer first, ...infer last] ? { [K in first & string]: TupleToNestedObject<last, U> } : U




type plmsad = TupleToNestedObject<['a', 'b', 'c'], boolean>

