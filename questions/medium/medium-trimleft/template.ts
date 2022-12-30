type empty = ' ' | '\n' | '\t'

type TrimLeft<T extends string> = T extends `${infer F}${infer L}` ? (F extends empty ? TrimLeft<L> : `${F}${L}`) : ''