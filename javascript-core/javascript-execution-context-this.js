
//Every function while executing has reference to its current execution context called this

function foo()
{
    console.log(this.bar);
}

var bar = "bar1";
var obj1 = {bar : "bar2", foo: foo};

foo();          // "this" uses refer global object - default binding rule
obj1.foo();     // "this" uses object on which function is called. - Implicit binding rule

var obj2 = {bar: "bar3"};
foo.call(obj2);   //object is explicitly bind to "this" - Explicit binding rule

/*
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
console.log(this);*/