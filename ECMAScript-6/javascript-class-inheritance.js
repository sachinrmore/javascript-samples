//Use "extends" keyword to add inheritance
// use "super" keyword to invoke parent class method.

class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
};

class Dog extends Animal {
  speak() {
      
      super.speak(); 
    console.log(this.name + ' barks.');
  }
};

var dog2 = new Dog("Tommy");
dog2.speak();

var dog1 = new Animal("Tommy");
dog1.speak();

console.log(dog2 instanceof Dog);
console.log(dog2 instanceof Animal);

//One may also extend traditional function-based "classes":

function Animal2 (name) {
  this.name = name;  
}
Animal2.prototype.speak = function () {
  console.log(this.name + ' makes a noise.');
}

class Dog2 extends Animal2 {
  speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }
}

var d = new Dog2('Mitzie');
d.speak();