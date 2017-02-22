//Iterators are just objects with a specific interface designed for iteration.
// All iterator objects have a next() method that returns a result object. The result object has two properties: value, which is the next value, and done, which is a boolean that’s true when there are no more values to return

// A generator is a function that returns an iterator. Generator functions are indicated by a star character (*) after the function keyword 


function *createIterator(){
    
    yield 1;
    yield 2;
    yield 3;
}

let iterator = createIterator()

console.log(iterator.next().value);
console.log(iterator.next().value);

//Iterable is an object with a Symbol.iterator property
//All collection objects (arrays, sets, and maps) and strings are iterables in ECMAScript 6 and so they have a default iterator specified

//Accessing the Default Iterator

let values = [1,2,3];

let iterator2 = values[Symbol.iterator]();

//console.log(iterator2.next());

//The values() method is the default iterator for arrays and sets, while the entries() method is the default iterator for maps. 

// Passing Arguments to Iterators

function *createIterator3() {
    let first = yield 1;
    let second = yield first + 2;       // 4 + 2
    yield second + 3;                   // 5 + 3
}

let iterator3 = createIterator3();

console.log(iterator3.next());           // "{ value: 1, done: false }"
console.log(iterator3.next(4));          // "{ value: 6, done: false }"
console.log(iterator3.next(5));          // "{ value: 8, done: false }"
console.log(iterator3.next()); 