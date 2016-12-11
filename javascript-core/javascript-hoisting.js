//At the creation or compilation phase, it searches for the function statement in file.
func1();

 //This is function declaration
function func1(){
    
    console.log("function declaration");
}

 //At the creation or compilation phase, it does not search for the function expression and it evaluate the expression at the runtime
funcstmt();

var funcstmt = function func2(){
    
    console.log("function expression");
}