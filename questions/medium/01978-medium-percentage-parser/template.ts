type PercentageParser<A extends string> =
  A extends `${infer L}${infer R}` ? L extends '+' | '-' ? [L, ...(R extends `${infer N}%` ? [N, '%'] : [R, ''])] : ['', ...(A extends `${infer V}%` ? [V, '%'] : [A, ''])] : ['', '', '']
