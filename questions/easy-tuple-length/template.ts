type Length<T extends readonly unknown[]> = T["length"];

type a = Length<[]>;


// js 实现
function Length(T: readonly unknown[]) {
    return T.length;
}
