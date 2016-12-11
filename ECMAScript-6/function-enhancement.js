// name property which is available for function declaration and function expression
"use strict";

function func1(){
	
}

console.log(func1.name);

var doAnotherThing = function() {
    // ...
};

console.log(doAnotherThing.name);

var doSomething = function doSomethingElse() {
    // ...
};

var person = {
    get firstName() {
        return "Nicholas"
    },
    sayName: function() {
        console.log(this.name);
    }
}

console.log(doSomething.name);      // "doSomethingElse"
console.log(person.sayName.name);   // "sayName"
console.log(person.firstName.name); // "get firstName"

// In ECMAScript 5, this code throws a syntax error. In ECMAScript 6, the doSomething() function is considered a block-level declaration and can be  
//accessed and called within the same block in which it was defined.

if (true) {

    console.log(typeof blockFunction);        // "function"

    function blockFunction() {
        console.log('block level function...');
    }

    blockFunction();
}

console.log(typeof blockFunction);    