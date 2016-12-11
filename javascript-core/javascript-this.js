
function func2(fname, lname, address){
    
    // inside function, this represent object being constructed
    this.fname = fname;
    this.lname = lname;
    
    //this is local variable of function which is not accessible as property of object
    var addr = address;
    
    this.fullName = function(){
        console.log(this);
    }
    
    this.getAddress = function(){
        return addr;
    }
}

var obj1 = new func2("r", "m","pune");
obj1.fullName();

console.log(obj1.getAddress());

//In the global execution context (outside of any function), this refers to the global object
// using this at global level points to window object
console.log(this);