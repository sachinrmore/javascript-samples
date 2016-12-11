//destructuring, which is the process of breaking a data structure down into smaller parts.It helps to destructure object and array to get information //you need out of it become much easier.

let obj = { firstName: 'Sachin', lastName: 'More'};

//// instead of assigning single values from object to variable we can assign it by using the below way provided variable name and object property name are // same.
//
let { firstName, lastName} = obj;

console.log(firstName);
console.log(lastName);

// Assignment to different variable names and default value 

let { firstName : fName, lastName : lName, address = 'pune'} = obj;

console.log(fName);
console.log(lName);
console.log(address);

// Array destructuring

let colors = [ "red", "green", "blue" ];

let [ firstColor, secondColor ] = colors;

console.log(firstColor);        // "red"
console.log(secondColor);       // "green"

// Rest Items

let [ firstColor1, ...restColors ] = colors;

console.log(firstColor1);        // "red"
console.log(restColors.length); // 2
console.log(restColors[0]);     // "green"
console.log(restColors[1]);     // "blue"

// cloning an array in ECMAScript 5

var clonedColors = colors.concat();
console.log(clonedColors);      //"[red,green,blue]"

// cloning an array in ECMAScript 6
let [ ...clonedColors1 ] = colors;

console.log(clonedColors1);      //"[red,green,blue]"