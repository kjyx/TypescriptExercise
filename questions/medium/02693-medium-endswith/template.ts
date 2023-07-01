

//判断T是否以U结尾
type EndsWith<T extends string, U extends string> = T extends `${infer firstT}${U}` ? true : false;

type sadas = StartsWith<'abc', 'bc'>


