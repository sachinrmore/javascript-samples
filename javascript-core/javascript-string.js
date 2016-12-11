
var str1 = "Hello Sachin";

var str2 = 'Hello Riyansh';

console.log('concat ' + str1.concat(str2) );

var a = str1.localeCompare("Hello Sachin");

console.log(a);

var s = '5 + 5'; // creates a string primitive
console.log(eval(s)) // it evaluate correctly

var w = String("5 + 5"); // creates a string object
console.log(w); // this is treated as string

console.log(eval(w.valueOf())); // A String object can always be converted to its primitive counterpart 

var a = str1.substr(5);
console.log(a);

console.log(str1.toLowerCase());
console.log(str1.trim());

console.log(str1.replace('Hello', 'Hi'));

console.log(str2.slice(1, 5));  //extracts a section of a string and returns a new string

console.log(str2.search('He'));