//A symbol is a new, primitive data type in ES6
//A symbol is unique and immutable.

let firstName = Symbol("first Name");

//You can use symbols as identifiers when adding properties to an object.
// It is mainly use to add property on Object and you do not know whether the property with the same name exist in object.
let obj1 = {
	[firstName] : "sachin",
	"lastName" : "more",
}

console.log(obj1[firstName]);
console.log(typeof firstName);

for(s in Object.getOwnPropertySymbols(obj1))
	{
		console.log(s)
	}