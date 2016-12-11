
//Arrow function
    
var names = ['sachin','riyansh'];

names.map( s => console.log(s));

var func1 = (x, y) => { return x+ y;};

console.log(func1());

var func2 = () =>  { return {id:"2", name:"sachin"}};

console.log(func2());

var a = 30;
var func3 = () => { return this.a;}

console.log(func3());


//
//No this, super, arguments, and new.target bindings - The value of this, super, arguments, and new.target inside of the function is by the closest containing nonarrow function. (super is covered in Chapter 4.)
//Cannot be called with new - Arrow functions do not have a [[Construct]] method and therefore cannot be used as constructors. Arrow functions throw an error when used with new.
//No prototype - since you can’t use new on an arrow function, there’s no need for a prototype. The prototype property of an arrow function doesn’t exist.
//Can’t change this - The value of this inside of the function can’t be changed. It remains the same throughout the entire lifecycle of the function.
//No arguments object - Since arrow functions have no arguments binding, you must rely on named and rest parameters to access function arguments..
//No duplicate named arguments - arrow functions cannot have duplicate named arguments in strict or nonstrict mode, 
//	
	
	
//  spread operator (...) allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) or multiple variables  (for destructuring assignment) are expected.

var arr1 = [2,3,4];
var arr2 = [7,8,9];
arr1.push(...arr2);