
type FlipArguments<T extends Function> = T extends (...arg: infer A) => infer C ? (...arg: Reverse<A>) => C : ''


type asvvdsda = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>


