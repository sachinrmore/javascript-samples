javascript-block-scope.js
 
var a = 1;
var b = 2;
 
//When used inside a block, let limits the variable's scope to that block
if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block
 
  console.log(a);  // 11
  console.log(b);  // 22
}
 
console.log(a); // 11
console.log(b); // 2
 
//catch() variable used inside catch block also has block level scope
 
 