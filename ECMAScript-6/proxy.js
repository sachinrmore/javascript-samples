// Proxy allow you to define your own nonstandard behavior for several low-level JavaScript operations, so you can replicate all behaviors of built-in JavaScript objects through proxy traps. These traps are called behind the scenes when various operations take place
//A reflection API was also introduced in ECMAScript 6 to allow developers to implement the default behavior for each proxy trap. Each proxy trap has a corresponding method of the same name on the Reflect object,

var target1 = {
	
	fname : "sachin",
	lname : "more"
};

let proxy1 = new Proxy(target1, {
	
	deleteProperty(trapTarget, key){
		
		if(key =="fname")
			return false;
		else
			{
			Reflect.deleteProperty(trapTarget, key);
			 return true;
			}
	}
});

console.log("fname" in proxy1);      // true

let result1 = delete proxy1.fname;
console.log(result1);               // false

console.log("fname" in proxy1);      // true


console.log("lname" in proxy1);       // true

let result2 = delete proxy1.lname;
console.log(result2);               // true

console.log("lname" in proxy1);       // false


// Validating Function Parameters

function sum(...values) {
    return values.reduce((previous, current) => previous + current, 0);
}

let sumProxy = new Proxy(sum, {
        apply: function(trapTarget, thisArg, argumentList) {

            argumentList.forEach((arg) => {
                if (typeof arg !== "number") {
                    throw new TypeError("All arguments must be numbers.");
                }
            });

            return Reflect.apply(trapTarget, thisArg, argumentList);
        },
	
	// Call construct when function is called with "new" operator
        construct: function(trapTarget, argumentList) {
            throw new TypeError("This function can't be called with new.");
        }
    });

console.log(sumProxy(1, 2, 3, 4));          // 10

// throws error
console.log(sumProxy(1, "2", 3, 4));

// also throws error
let result = new sumProxy();