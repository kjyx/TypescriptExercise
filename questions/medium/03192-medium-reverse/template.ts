type Reverse<T extends Array<any>> = T extends [...infer F, infer R] ? [R, ...Reverse<F>] : T



type asdsda = Reverse<['1', '2', '3']>