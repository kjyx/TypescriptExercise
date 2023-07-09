// 三个值 current记录当前正确的数 n left_1 记录n-1  left_2 记录n-2

type Fibonacci<T extends number, current extends any[] = [1, 1, 1], left_1 extends any[] = [1], left_2 extends any[] = [1]> =
    T extends 1 | 2 ? 1 : T extends current['length'] ? [...left_1, ...left_2]['length'] : Fibonacci<T, [...current, 1], left_2, [...left_1, ...left_2]>



type asdsadas = Fibonacci<6>