type MyReturnType<T extends (...arg: any) => any> = T extends (...arg: any) => infer K ? K : never;
