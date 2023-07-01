
//判断T是否以U开头
type StartsWith<T extends string, U extends string> =
    U extends `${infer Ufirst}${infer Ulast}` ? T extends `${Ufirst}${infer Tlast}` ? StartsWith<Tlast, Ulast> : false : true


type accc = StartsWith<'dfdsasd', 'df'>


