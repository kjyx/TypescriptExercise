type B = {
    name: string,
    s: {
        age: number,
        sex?: string,
    }
}

let hj: B = {
    name: 'hj',
    s: {
        age: 100,
        sex: '男'
    }
}

let hm: B = {
    name: 'hm',
    s: {
        age: 200,
        sex: '女'
    }
}

type getKey<key> = key extends keyof B ? key : never

function selectItem<T>(key: getKey<keyof T>) {
    hm[key] = hj[key]
}

selectItem<B>('name')