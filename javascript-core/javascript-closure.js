
// When program execution enter into inner function, it creates closure that contains variables and functions (both from outer and inner function) which are accessible to inner function.
// It terminate closure when inner function execution is complete.
function outsideFunc(name){
    
    var lname = 'more';
    
    function insideFunc(){
        
        return name + ' ' + lname; // inner function can access variables and functions which are defined outside.
    }
    
    insideFunc();
}

outsideFunc("sachin");

