var x = 10;

function func1(y, z)
{
    console.log(this);
    console.log(this.x);
    console.log(y + z);
}

func1(2, 3); //standard way to call function

func1.call(this, 7, 5);  // Also invoke function using call() - need to pass first parameter for this object

var obj1 = { x : 20};

func1.call(obj1, 7,8); // We can change this object used in function by passing another object as first parameter to function

//apply function is same as call() but it pass parameters as array

func1.apply(obj1,[20,30]);

var obj2 = { x : 40};

// bind() - create a new function which bind first parameter object with this.
// We can pass parameter to function while calling function 
var newFunc1 = func1.bind(obj2);

newFunc1(5,5);

//we can also set parameters in bind() function
var newFunc2 = func1.bind(obj2, 6,6);

newFunc2();

// Imp : call(), apply() and bind() function always requires to pass first parameter as object which will bind to "this" object.