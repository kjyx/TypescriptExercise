// 2023/7/6  10:21

type Flip<T extends object> = {
    [key in keyof T as `${T[key]}`]: key
}


type sadasda = Flip<{ pi: 3.14; bool: true }>