// Closure is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope.
 
function foo(){
 
              
               return function baz(){
                              console.log('Inner function');                     
               }
              
}
 
var baz = foo();
baz();          // Inner function is executed outside of its scope is called closure
 