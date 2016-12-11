const PI = 3.142;

console.log(PI);

var i = 10;

//let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.
if( i > 0){
    
    let j = 10 * 10;
    console.log("block scope local variable " + j);
}
     
//console.log("block scope local variable " + j);

    var names = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

console.log("Using let in function:")
for(let p =0; p < names.length; p++){
    
    console.log(names[p]);
}

//let and const : Can access variable only after declaration

const obj2 = {
    name : "sachin"
}

// Change the value of property of constant object
obj2.name = "Riyansh";

//cannot change object itself
//obj2 = {
//    name : "Riyansh"
//}

// When var is used in the global scope, it creates a new global variable, which is a property on the global object (window in browsers). That means you //can accidentally overwrite an existing global using var, such as:

// in a browser
var RegExp = "Hello!";
console.log(window.RegExp); 
console.log(window.RegExp === RegExp); 

//If you instead use let or const in the global scope, a new binding is created in the global scope but no property is added to the global object. That //also means you cannot overwrite a global variable using let or const, you can only shadow it.

const ncz = "Hi!";
console.log(ncz);                       // "Hi!"
console.log("ncz" in window);


//IMP: The current best practice for block bindings is to use const by default and only use let when you know a variable’s value needs to change. 