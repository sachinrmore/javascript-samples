

a1();

// line start with "function" keyword is function defintion or declaration
//Function Declarations are parsed at pre-execution stage, when the browser prepares to execute the code. so we can access the function before it is declared.
function a1(c) {

    alert("function declaration");

}

//When a function comes as a part of a statement, it is a Function Expression. We cannot access the function before it is declared.

var a3 = function a2() {
    alert("function expression");
};

a3();


(function a4() {
    alert("function execute immediately");
})();