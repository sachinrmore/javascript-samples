let sym1 = Symbol();

sym1 = "sachin";

sym1 = true;

//we can change the value of Symbol
console.log(sym1);

let sym2 = Symbol();

sym2 = true;

console.log("Compare the symbols after assigning value");
console.log(sym1 === sym2);

console.log(Symbol() === Symbol());

let firstName = Symbol("first Name");

let person = {
    [firstName] : "s",
    lastName : "m"
}

console.log(person[firstName]);

// Object.keys() and Object.getOwnPropertyNames() methods can retrieve all property names in an object but does not return symbols

let symbols = Object.getOwnPropertySymbols(person);

console.log(symbols.length);     
console.log(symbols[0]);          
console.log(person[symbols[0]]);    