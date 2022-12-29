// type Length<T extends readonly unknown[]> = T["length"];
type Length<T extends readonly any[]> = T['length']

type aa = Length<[1,2,3]>;


// js 实现
function Length(T: readonly unknown[]) {
    return T.length;
}
  