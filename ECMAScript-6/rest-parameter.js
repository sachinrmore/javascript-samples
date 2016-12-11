
//Before ECMAScript6, Javascript allow to pass indefinite number of value to function and in function, arguments object is used to access those value.
//"arguments" object contains all parameters including specified 
//rest parameter does not contains specified parameter

function func1(key1){
	
	for(let i =0; i< arguments.length; i++)
		console.log(arguments[i]);
}

func1(2,3,4);

// Rest parameters --  allows us to represent an indefinite number of arguments as an array.
// function contain only one rest parameter and it should be last parameter

function func2(key1, key2, ...keys){
    
      for(let i=0; i < keys.length; i++)
    	console.log(keys[i]);
}

func2(5,6,40,30,20); //rest parameter contains 40,30,20