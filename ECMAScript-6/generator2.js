//Async Pattern
// A generator is a function that pause itself in the middle of the execution and resume later.
 
function *func(){
 
               console.log('Hi');
 
               yield null;
 
               console.log('Hello');
}
 
var iterator = func();  // function will return iterator
 
iterator.next();  // print "Hi" and pause at the yield and return control to calling function
 
iterator.next();  // print "Hello"
 