'use strict';

//An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. 
//You first need to declare your class and then access it
// We can define static method 
// It is possible to add static variable in class but cannot define in class declaration

//Class declaration 
class Polygon{
    
       
    //class can have only one constructor
    constructor(height, width){
        
        this.height = height;
        this.width = width;
    }
    
	//The method gets added to Prototype so that it is available to all instances of class
    calcArea(){
        
        console.log(this.height * this.width);
    }
    
	// The static method adds at the class level not Prototype
     static getArea(){
        console.log("This is a static method");
    }
    
    
}

var obj = new Polygon(20,30);

console.log(obj.calcArea());

Polygon.getArea();

//Add new static property dynamically 
Polygon.area = "12";

//Add new method to class dynamically
Polygon.setArea = function(){
    console.log("This is a setArea() function");
}
console.log(Polygon.area);
console.log(Polygon.setArea());


//class expression - can be named and unnamed(class does not have name)

var ploy = class Polygon2{
    
    constructor(height, width){
        
        this.height = height;
        this.width = width;
    }
    
     calcArea(){
        
        console.log(this.height * this.width);
    }
    
   
}

let p1 = new ploy(2,3);
p1.calcArea();

// class expression that is used to create singleton instance

let person = new class {

    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }

}("Nicholas");

person.sayName(); 


//Class declarations, unlike function declarations, are not hoisted. Class declarations act like let declarations and so exist in the temporal dead zone until execution reaches the declaration.
//All code inside of class declarations runs in strict mode automatically. There’s no way to opt-out of strict mode inside of classes.
//All methods are non-enumerable. This is a significant change from custom types, where you need to use Object.defineProperty() to make a method non-enumerable.
//All methods lack an internal [[Construct]] method and will throw an error if you try to call them with new.
//Calling the class constructor without new throws an error.
//Attempting to overwrite the class name within a class method throws an error.