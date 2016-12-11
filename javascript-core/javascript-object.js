
//literal with no properties and functions
var a = {};

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


// define function constructor

function func1 (fname1, lname)
{
    this.fname = fname1;
    this.lname = lname;
    this.fullName = function(){
       return this.fname + ' ' + this.lname;
    } 
}

// creates object with function constructor
var d1 = new func1("sachin","m");
var d2 = new func1("rishita","m");


console.log(d1.fullName());


//Accessing properties

console.log(d1.fname);
console.log(d1["fname"]);

//Adding new properties and function to existing object 

d1.address = "pune";

console.log(d1.address);

//Function allow us to dynamically create a new function
var add = new Function("first", "second", "return first + second");

console.log(add(1, 1));


