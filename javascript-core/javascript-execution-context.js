
/*context and scope are not the same. Every function invocation has both a scope and a context associated with it. 
Fundamentally, scope is function-based while context is object-based. 
Context is always the value of the this keyword which is a reference to the object that “owns” the currently executing code.
*/

function f1(){

	console.log("f1 " + this);

	f2();           //execute under global context
	function f2(){
		console.log("f2 " + this);

		f3();		//execute under global context

		function f3(){
			console.log("f3 " + this);
		}
	}
}

f1();   //execute under global context

new f1();  //create new context and execute function within newly created context. 
// If "new" keyword is not used for inner function then it execute under global context.