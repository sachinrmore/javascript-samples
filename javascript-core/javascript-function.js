 // Function is a datatype
        // Function parameters are optional, so while calling if the value is not passed for parameter then it is undefined.
        // Function overloading is not possible. If we call function, it calls last declared function.
        // All functions return a value. even if it is not return, it is undefined.
        // Scoping - Function in javascript only create scope. e.g variable declare inside function cannot be access outside of the function. 
        //             However variable declare inside {} can be access outside of the {}.
        

            function myFunction2()
            {
            }

            var x = myFunction2(); //  type of undefined
            
            function myFunction(a, b)
            {
                //
                return a + b;
            }

            //document.getElementById("demo").innerHTML = myFunction(3, 5); // Use () bracket to call function. By using function name, it print the function definition.

            function Print(a, b)
            {
                // Function parameters are optional, so while calling if the value is not passed for parameter then it is undefined.
            }

            var output = Print(10);
            
            function Print(a, b, c)
            {
                // Function overloading is not possible. If we call function, it calls last declared function.

                alert(arguments.length);
                alert(arguments[0]);
            }

            var a = Print(2, 3);