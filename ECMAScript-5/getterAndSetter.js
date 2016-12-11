'use strict';


// getter and setter of property

var obj1 = {
    
    fname : "sachin",
    lname : "more",
    address1 : "pune",
    
    get fullName() {
        
        return this.fname + " " + this.lname;
    },
    
    set fullName(fname1){
        this.fname = fname1
        
    }
    
}

console.log(obj1.fullName);

obj1.fullName = "Riyansh";

console.log(obj1.fullName);

var str = 'Hello\'
'World';