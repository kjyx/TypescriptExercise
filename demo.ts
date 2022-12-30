// function map<T, U>(f: (t: T) => U, ts: T[]): U[];

// let sns = map<number, string>((n) => n.toString(), [1, 2, 3]);

// declare function run<T>(thunk: (t: T) => void): T;

// let i: { inface: string } = run((o) => {
//     o.inface = "cccc";
// });

// function sun<T extends ArrayLike<unknown>, U extends keyof T>(m: T[U]) {}

// function add<T extends { length: number }>(x: T, y: T): T {
//     return x.length > y.length ? x : y;
// }

// add<string>('ccc','333')

// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = firstName + "" + middleInitial + "" + lastName;
//     }
// }
// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(p: Person) {
//     return p.firstName + p.lastName;
// }

// greeter(new Student("ccc", ",", "fff"));

// let a: ReadonlyArray<number> = [1, 2, 3, 4];

// const arar = ["cc", "bb", "aaa"];

// arar.forEach((s) => {
//     console.log(s.toUpperCase())
// });

// type Shape = Circle | Square;

// function Person(fn: (str: string) => void) {
//     console.log(fn);
// }

// function Son(str: string) {}

// Person(Son);
// type children = {
//     name: string;
//     age: number;
// };

// interface Perosn {
//     name: string;
//     age: number;
//     ccc: new (name: string, age: number) => children;
// }

// class Fn {
//     constructor(public name: string, public age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

// function Func(people: Perosn) {
//     console.log(people.name, people.age);
//     let a = new people.ccc(people.name, people.age);
//     console.log(a);
// }

// Func({
//     name: "张三",
//     age: 100,
//     ccc: Fn,
// });

// function sum<T extends { length: number }>(a: T, b: T): T {
//     if (a.length > b.length) {
//         return a;
//     } else {
//         return b;
//     }
// }

// sum<string>("10", "20");

// function MyforEach(arr: any[], callback: (item: any, index?: number) => void) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i);
//     }
// }

// MyforEach([1, 2, 3, 4, 5], (item, index) => {
//     console.log(item, index!.toFixed);
// });

// function fn(str: number): number;

// function fn(str: boolean): boolean;

// function fn(str: number | boolean) {
//     return str;
// }

// type User = {
//     id: number;
//     admin: boolean;
//     becomeAdmin: () => void;
// };

// const user: User = {
//     id: 123,
//     admin: false,
//     becomeAdmin: function () {
//         this.admin = true;
//     },
// };

// interface DB {
//     filterUser: (filter: (this: User) => void) => User[];
// }

// interface Person {
//     name: string;
//     age: number;
//     sex: string;
// }

// function People({ name, age, sex }: Person) {
//     console.log(name, age, sex);
// }

// let obj: Person = {
//     name: "ccc",
//     age: 10,
//     sex: "ccc",
// };

// People(obj);

// interface Person {
//     name: string;
//     age: number;
// }

// interface RedonlyPerson {
//     readonly name: string;
//     readonly age: number;
// }

// let a: Person = { name: "ccc", age: 999 };

// let c: RedonlyPerson = a;

// a.age++;

// interface Person {
//     [index: number]: string;
// }

// interface Person {
//     name: unknown;
// }

// let a: Person = {
//     name: 100,
// };

// interface Generi {
//     <T>(num: T): T;
// }

// function Person<T>(num: T) {
//     return num;
// }

// let a: Generi = Person;

// function Person<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }

// let obj = {
//     name: "ccc",
//     age: 100,
// };

// Person(obj, "sex");

// interface ccc<T> {
//     new (name: string, age: number): void;
// }

// function create<T>(c: ccc<T>): void {
//     let obj = new c("ccc", 100);
//     console.log(obj);
// }

// function Person(name: string, age: number) {
//     this.name = name;
//     this.age = age;
// }

// interface kkk {
//     name: string;
//     age: number;
// }

// create<kkk>(Person);

// type Perosn = { name: string; age: number; sex: string };

// type ccc = Perosn["name" | "age"];

// interface IdLable {
//     id: number;
// }

// interface NameLable {
//     name: string;
// }

// type NameOrId<T extends number | string> = T extends number ? IdLable : NameLable;

// function Create<T extends number | string>(str: T): NameOrId<T> {
//     throw "unimplemented";
// }

// Create("ccc");

// type Person<T> = {
//     [key in keyof T]: T[key];
// };

// type Getters<T> = {
//     [key in keyof T as `get${Capitalize<string & key>}`]: () => T[key];
// };

// interface Person {
//     name: string;
//     age: number;
//     sex: string;
// }

// type LazyPerson = Getters<Person>;

// type EventConfig<Events extends { kind: string }> = {
//     [key in Events as Events["kind"]]: (event: Events) => void;
// };

// type ccc = {}

// type ccc = 'cccc'
// type aaa = 'aaa'

// type kkk = `web${ccc | aaa}`

// const passedObject = {
//     firstName: "Saoirse",
//     lastName: "Ronan",
//     age: 26,
// };

// type PropEventSource<Type> = {
//     on(eventName: `${string & keyof Type}Changed`, callback: (newValue?: any) => void): void;
// };
// declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

// const Person = makeWatchedObject({
//     firstName: "Saoirse",
//     lastName: "Ronan",
//     age: 26,
// });
// Person.on("firstNameChanged", () => {});

// class Person {
//     name!:string
// }

// Person.name

// class Person {
//     Myname: string;
//     constructor(name: string) {
//         this.Myname = name;
//     }
// }

// class Son extends Person {
//     constructor(name: string) {
//         super(name);
//     }
// }

// class Animal {
//     greeet() {
//         console.log("ccc");
//     }
// }

// class Dog extends Animal {
//     greeet(name?:string): void {
//         if (!name) {
//             super.greeet()
//         }else {
//             console.log(name,'---');

//         }
//     }
// }

// class Base {
//     name = 'base';
//     constructor() {
//         console.log(this.name);
//     }
// }

// class Derved extends Base{
//     name = 'derved'
// }

// let a = new Derved()

// class Base {
//     private x = 1;
// }

// class Son extends Base {
// }

// class A {
//     private names = "ccc";

//     public getName(other: A) {
//         return this.names === other.names;
//     }
// }

// let a = new A();

// console.log(a.getName(a));

// class Base {
//     content: string = "";

//     set(value: string) {
//         this.content = value;
//         return this;
//     }
// }

// class Box extends Base{
//     clear(){
//         this.content = ''
//     }
// }

// let a = new Box()
// let b = a.set('ccc')

// class Base {
//     content: string = "";

//     sameAs(other: this) {
//         return other.content === this.content;
//     }
// }

// class Box extends Base {
//     content: string = "";
//     otherContent: string = "";
// }

// let a = new Base();

// let b = new Box();

// class Base {
//     name: string = "Base";
//     getName() {
//         return this.name;
//     }
// }

// let c = new Base();

// let obj = {
//     name: "Obj",
//     getName: c.getName,
// };

// console.log(obj.getName());

// class Person {
//     content: string = "";

//     set(value: string) {
//         this.content = value;
//         return this;
//     }
// }
// class Son extends Person {
//     clear() {
//         this.content = "";
//     }
// }

// let a = new Son();
// let b = a.set("ccc");

// console.log(b);

// class Base {
//     content: string = "";
//     sameAs(other: this) {
//         console.log(other,this,'--');
//     }
// }

// class Son extends Base {
//     content: string = "?";
// }

// let a = new Base();

// let b = new Son();
// b.sameAs(a);

// class Base<T> {
//     value?: T;
//     getValue(): this is { value: T } {
//         return this.value !== undefined;
//     }
// }

// let a = new Base<string>();
// console.log(a.getValue());

// class Base {
//     constructor(public readonly x: number, protected y: number, private z: number) {
//         this.x = x;
//         this.y = y;
//         this.z = z;
//     }
// }

// let a = new Base(10, 20, 30);
// console.log(a.x);

// abstract class Perosn{

// }

// type A = Awaited<Promise<string>>;

// interface Person {
//     a?: number;
//     b?: number;
// }

// type C = Required<Person>;

// type MyRecord<K extends string | number | symbol, T> = {
//     [key in K]: T;
// };

// interface Person {
//     name: string;
//     age: number;
// }

// type C = "aa" | "bb" | "vv";

// type A = MyRecord<C, Person>;

// type C = MaExclude<"a" | "b" | "c" | "d", "c" | "d">;

// type MaPick<T, K extends keyof T> = {
//     [key in K]: T[key];
// };

// type MaExclude<T, K> = T extends K ? never : T;

// type MyOmit<T, K extends keyof T> = MaPick<T, MaExclude<keyof T, K>>;

// interface Person {
//     name: string;
//     age: number;
// }

// type A = MyOmit<Person, "name">;

// declare function F1(arg: (c: string, d: number) => void): void;

// type A = Parameters<typeof F1>;

// class Person {
//     constructor(public names: string, public age: number) {}
// }

// type A = ConstructorParameters<typeof Person>;

// let arr: A = ["ccc", 100];

// namespace Person {
//     let a = "ccc";
//     export function KKK() {}
// }

// namespace Person {
//     export function CCC() {
//         KKK()
//         console.log(a);
//     }
// }

// function Person(str: string): string {
//     return Person.names + Person.age + str;
// }

// namespace Person {
//     export let names = "ccc";
//     export let age = 100;
// }

// const enum Direction {
//     Up,
//     Down,
//     Left,
//     Right,
// }

// let directions = [Direction.Up, Direction.Down, Direction.Left, Direction.Right];
// console.log(directions);

// const enum EDirection {
//     UP,
//     Down,
//     Left,
//     Right,
// }

// const a = {
//     UP: 0,
//     Down: 1,
//     Left: 2,
//     Right: 3,
// } as const;

// console.log(a.UP);
// console.log(EDirection.UP);

// function toArray<X>(xs: Iterable<X>): X[] {
//     return [...xs];
// }

// let arr: Array<number> = [1, 2, 3, 4, 5];

// console.log(toArray(arr));

// type Constructor = new (...args: any[]) => {};

// function Scale<TBase extends Constructor>(Base: TBase) {
//     return class Scaling extends Base {
//         _scale = 1;
//         setScale(value: number) {
//             this._scale = value;
//         }

//         getScale() {
//             return this._scale;
//         }
//     };
// }

// class Person {
//     name = "";
//     x = 0;
//     y = 0;

//     constructor(name: string) {
//         this.name = name;
//     }
// }

// let Scalings = Scale(Person);

// let cccc = new Scalings("ccc");

// console.log(cccc);

// function person<T>() {
//     class Person {
//         static prop: T;
//     }
//     return Person;
// }
// /// <reference path="demo.d.ts" />
// import * as M from "Person";

// declare const a: unique symbol;

// const cc: unique symbol = Symbol();

// let ff: typeof cc = cc;

// /* / <reference lib="es2017.string"/> */

// interface Pet {
//     name: string;
// }

// let pet: Pet;

// let a = { name: "ccc", age: 100 };

// pet = a;

// enum TypeEvent {
//     Mouse,
//     Keyboard,
// }

// interface Event {
//     timestamp: number;
// }

// interface MyMouseEvent extends Event {
//     x: number;
//     y: number;
// }

// interface MyKeyBoard extends Event {
//     keyCode: number;
// }

// function listenEvent(eventType: TypeEvent, handler: (e: Event) => void) {}

// // listenEvent(TypeEvent.Mouse, (e: MyMouseEvent) => console.log("cccc"));

// listenEvent(TypeEvent.Keyboard, (e: Event) => {
//     console.log((e as MyMouseEvent).x);
// });

// let arr: [number, string, boolean] = [10, "10", true];

// let [a, b, c] = arr

// type ccc = `http://${string}`
// interface Person {
//     name: string;
//     age: number;
//     sex: string;
// }

// // type kk = Record<keyof Person, string>;

// type KK = Pick<Person, "name">;

// type FnWidthProp = {
//     fn(a: number, b: number): number;
//     prop: string;
// };

// let F: FnWidthProp = {
//     fn: (x, y) => {
//         return x + y;
//     },
//     prop: "hi",
// };

// F.fn(10, 20);

// type A = string;

// type B = A;

// let x: A = "hello";
// let y: B = x;

// interface Person extends Array<string> {
//     username: string;
// }

// type A1 = { name: string };
// type B1 = { age: number };

// type C1 = A1 | B1;

// let C: C1 = {
//     age: 100
// };

// const F1 = (a: null | { name: string }) => {
//     if (a == null) {
//         console.log(111);
//     } else {
//         console.log(a.name);
//     }
// };

// type Rect = {
//     height: number;
//     width: number;
// };

// type Circle = {
//     center: [number, number];
//     redius: number;
// };

// const F1 = (a: Rect | Circle) => {
//     if (isRect(a)) {
//         a;
//     }
// };

// function isRect(x: Rect | Circle): x is Rect {
//     return "height" in x && "width" in x;
// }

// const value: unknown = "ccc";

// let key: string = value as string;

// interface X {
//     a: number;
// }

// interface Y {
//     a: number;
//     b: number;
// }

// let K: X = {
//     a: 999,
// };
// let CC: Y = {
//     a: 100,
//     b: 200,
// };

// type Person = {
//     name: string;
//     age: number;
//     kind: string;
// };

// type User = Person & {
//     sex: string;
//     genter: string;
//     kind: number;
// };

// let user: User = {
//     name: "ccc",
//     age: 100,
//     sex: "男",
//     genter: "ccc",
//     kind: 'cc'
// };

// let statusCode = {
//     200: "操作成功",
//     404: "内容找不到",
//     500: "操作失败",
//     10001: "登录失效",
// };

// type status = keyof typeof statusCode;

// let status1:status = 200

// let ccc = statusCode[status1]

type MySplit<T extends string, U extends unknown[] = []> = T extends `${infer F}${infer last}` ? MySplit<last, [...U, F]> : U;

type str = MySplit<"12345">;




type Indexof<T extends any[], U, C extends number[] = []> = T extends [infer F, ...infer Rest] ? (F extends U ? C["length"] : Indexof<Rest, U, [...C, 1]>) : -1;
type kkk = Indexof<[1, 2, 3, 4, 5], 4>;
