     var a = 10;
        z = 50;
        
        //There are two type of scope -- function level and global scope
        // When a program start, it creates new scope
        // variable declare inside function has function level scope, cannot access outside it.
        function A() {

            a = 20;
            console.log(a);

            // The scope of variable declared in function, is limited to function only
            var b = 10;
            
            console.log(b);

        }

        A();
        
        console.log(a);
        //console.log(b);

        // The variable declared in if block or anywhere else can be access outside of it i.e. Global scope.
        if (true) {
            var c = 30;
        }
        
        console.log(c);
        