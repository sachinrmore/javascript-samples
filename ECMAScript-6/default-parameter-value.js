// Set default value to parameter

function getValue(){
	
	return 100;
}

function func2(a, b = 2, callback = getValue()){
    
    console.log(a); // the default value of parameter is undefined
    console.log(b); // the default value is set to 2
	
	let c = callback();
	console.log(c);
}

func2(3);

func2(3,5);

func2(3,5, function(){ console.log('default function parameter')});

//Passing undefined will use default value But passing null will not use default value.
func2(3, undefined, function(){ console.log('default function parameter')});

// Changing the parameter of function does not affect the arguments object

function mixArgs(first, second = "b") {
    console.log(arguments.length);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d"
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
}

mixArgs("a");

// can previous parameter as default value
function(first, second = first){
	
}

