 //At the creation or compilation phase, it searches for the function statement in file,
  // it moves function at the top during compilation but does not physically change the file.
        A();
       
        //This is function statement
        function A() {
            console.log("function A() called");
        }
 
      
        //At the creation or compilation phase, it does not search for the function expression and it evaluate the expression at the runtime
       
        b();
       
        //This is function expression
        var b = function () {
            console.log("function B() called");
        };