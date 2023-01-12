// 方法一： 蠢比写法（我是这么写的）
type Absolute<T extends number | string | bigint> = `${T}` extends `${infer L}${infer R}` ? (L extends "-" ? Absolute<R> : `${L}${Absolute<R>}`) : T;

// 方法二 牛逼
// type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer F}` ? F : `${T}`;
