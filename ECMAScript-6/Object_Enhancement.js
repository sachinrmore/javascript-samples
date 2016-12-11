// Shorthand of property intializer for Object literal. No need to specify property name when local variable name and property name are same.

let x = 10;
let y = 20;
obj = { x, y}

console.log(obj);

// Concise method: In ECMAScript 6, the syntax is made more concise by eliminating the colon and the function keyword.
obj1 = {
    
    func1(a, b){
        this.a = a;
        this.b = b;
        
        return this.a + this.b;
    }
}

console.log(obj1.func1(2,3));

// In ECMAScript 6, computed property names are part of the object literal syntax

var lastName = "more";

var person1 = {
    firstName : "sachin",
    [lastName]: "more"      //computed property
}

console.log(person1[lastName]);


//This method accepts two arguments and returns true if the values are equivalent. Two values are considered equivalent when they are of the same type and have the same value.
//Object.is() works the same as the === operator. 

console.log(+0 === -0);
console.log(NaN === NaN);

console.log(Object.is(+0, -0));
console.log(Object.is(NaN,NaN));


// Prototype changes
// ECMAScript 5  lacked a standard way to change an object’s prototype after instantiation.
// ECMAScript 6 Object.setPrototypeOf() method, which allows you to change the prototype of any given object. 

let person = {
    getGreeting() {
        return "Hello";
    }
};

let dog = {
    getGreeting() {
        return "Woof";
    }
};

// prototype is person
let friend = Object.create(person);
console.log(friend.getGreeting());                      // "Hello"
console.log(Object.getPrototypeOf(friend) === person);  // true

// set prototype to dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting());                      // "Woof"
console.log(Object.getPrototypeOf(friend) === dog);     // true

// Formal method defintion
//ECMAScript 6 formally defines a method as a function that has an internal [[HomeObject]] property containing the object to which the method belongs.

let person2 = {

    // method
    getGreeting() {
        return "Hello";
    }
};

// not a method
function shareGreeting() {
    return "Hi!";
}