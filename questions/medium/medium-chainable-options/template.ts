type Chainable<Result = {}> = {
    option<Key extends string, Val>(key: Key extends keyof Result ? never : Key, value: Val): Chainable<Omit<Result, Key> & { [k in Key]: Val }>;
    get(): Result;
};

// js实现
// function Chainable() {
//     this.obj = {}
// }

// Chainable.prototype.option = function(key, value){
//     this.obj[key] = value
//     return this
// }

// Chainable.prototype.get = function(){
//     return this.obj
// }
