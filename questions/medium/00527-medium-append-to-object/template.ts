type AppendToObject<T, U extends string, V> = {
    [key in keyof T | U]: key extends keyof T ? T[key] : V 
};

type test1 = {
    key: "cat";
    value: "green";
};

type llll = AppendToObject<test1, "home", boolean>;
