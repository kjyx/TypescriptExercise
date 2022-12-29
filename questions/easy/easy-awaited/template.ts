type Thenable<K> = { then: (onfulfilled: (arg: K) => any ) => any };

type MyAwaited<T extends Thenable<any>> = T extends Thenable<infer K> ? K extends Thenable<any> ? MyAwaited<K> : K : never;