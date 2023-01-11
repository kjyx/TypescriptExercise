type newArgs<T extends any[], A extends any[]> = [...T, ...A];

type AppendArgument<Fn extends (...args: any[]) => void, A extends any> = Fn extends (...args: infer R) => infer K ? (...args: newArgs<[...args: R], [x: A]>) => K : "";


type ccc = AppendArgument<(a: number, b: string) => number, boolean>;
