            var a = typeof 1;  //number
            var b = typeof 1.1;  //number
            var c = typeof "test"; //string
            var d = typeof true; //boolean

           

            var e = Number.MIN_VALUE;
            var f = Number.MAX_VALUE;
            var g = 10 / "test"; // NaN
            var h = isNaN("test"); // NaN

        // JavaScript is Case Sensitive
        // Semicolons separate JavaScript statements.
        // Local variables are deleted when the function is completed.
        // Global variables are deleted when you close the page.
    
        var c; //it has the value of undefined
        c = 12.2;
        var d = "test";  //Strings are written inside double or single quotes
        var e = true; //boolean type
        var a = 10;
        
        //JavaScript has dynamic types. This means that the same variable can be used as different types.
        a = "test2"; //assign different value
        var A = 12;
        var b = a + A;

        var z = null;          //Unfortunately, in JavaScript, the data type of null is an object.
        var x = undefined;     // Value is undefined, type is undefined
        
        var arr = ["Volvo", "Bus"];
        
        window.alert(typeof (e));
        
        function myFunction()
        {
            var a = 10; // local variable
            carName = "Volvo";  //If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
        }