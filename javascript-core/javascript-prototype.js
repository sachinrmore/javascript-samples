function Employee(fname, lname){
    
    this.fname = fname;
    this.lname = lname;
}

function Manager(dept){
    
    this.dept = dept;
}

Manager.prototype = new Employee("sachin", "more"); // set inheritance by setting prototype

var m1 = new Manager("account");

console.log(m1.dept); //get property from Manager
console.log(m1.fname); // If property  is not found in object then it search in parent object

//Check to see if the value exists locally. If it does, return that value.
//If there is not a local value, check the prototype chain (using the __proto__ property).
//If an object in the prototype chain has a value for the specified property, return that value.
//If no such property is found, the object does not have the property.

//Adding new property that is available to all instances of child class
Employee.prototype.Id = 20;

console.log(m1.Id);

var m2 = new Manager("account2");

console.log(m2.Id);