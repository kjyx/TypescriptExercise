type LengthOfString<S extends string, arr extends string[] = []> = S extends `${infer L}${infer R}` ? LengthOfString<R, [...arr, L]> : arr["length"];

type lll = LengthOfString<"kumiko">;
