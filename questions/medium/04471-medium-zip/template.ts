


type Zip<T extends any[], U extends any[], arr extends any[] = []> =
    T extends [infer TL, ...infer TR] ? U extends [infer UL, ...infer UR] ? Zip<TR, UR, [...arr, [TL, UL]]> : arr : arr


    