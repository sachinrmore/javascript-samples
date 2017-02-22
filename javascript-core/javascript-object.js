
//literal with no properties and functions
var a = {};


//Adding new properties and function to existing object 
a.fname = "sachin";
a.lname = "more";
a.fullName = function(){
   return this.fname + ' ' + this.lname;
}

console.log(a.fullName());

// literal with properties and function
var b = {
    
    fname : "sachin",
    lname : "more",
    fullName : function(){
       return this.fname + ' ' + this.lname;
    }    
}

console.log(b.fullName());

// Creates a object with new keyword
var c = new Object();
c.fname = "Amol";

console.log(c.fname);



//Accessing properties

console.log(c.fname);
console.log(c["fname"]);


//Function allow us to dynamically create a new function
var add = new Function("first", "second", "return first + second");

console.log(add(1, 1));


