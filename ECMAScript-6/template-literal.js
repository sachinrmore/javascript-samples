//template literals act like regular strings delimited by backticks (`) instead of double or single quotes


let message = `Hello world!`;

console.log(message);               // "Hello world!"
console.log(typeof message);        // "string"
console.log(message.length);        // 12

//multi-line string

let message1 = `Hello
World`;

console.log(message1);

//Substitutions allow you to embed any valid JavaScript expression inside a template literal and output the result as part of the string.

let name = 'Sachin';

message1 = `Hello ${name}`;

console.log(message1);

console.log(`Total: ${ 2 * 2}`);



// Template Tagged function : We are able to modify the output using function

const a = 10;
const b= 20;

//first parameter contains all literals
//Second parameter contains all expressions
function tagFunc(strings, ...values){
	
	for(let s of strings){
		console.log(s);
	}
	
	for(let s of values){
		console.log(s);
	}
	
	return 'test';
}

var result = tagFunc`Hello ${ a+b} World ${a * b}`;

