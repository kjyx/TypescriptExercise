type Empty = " " | "\n" | "\t";

// type TrimLeft<T extends string> = T extends `${Empty}${infer L}` ? TrimLeft<L> : T;

type TrimRight<T extends string> = T extends `${infer Result}${Empty}` ? TrimRight<Result> : T;

type Trim<S extends string> = TrimRight<TrimLeft<S>>;
