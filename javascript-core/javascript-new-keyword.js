
//1. brand new empty object created
//2. object get linked to different object like prototypes
// 3. new object get bound to this keyword
// 4. If the function does not return anything, then brand new object get returned.


function foo(){
	
	console.log(this);
	this.bar = "bar";
}

foo();   // when function is call without new keyword, the execution context or scope of function is global i.e. window

var obj = new foo();   // using new convert normal function call to constructor function call
console.log(obj.bar);