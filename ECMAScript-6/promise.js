 //Promise has 3 states - Pending, rejected and fulfilled
 //resolve and reject method are called asynchronously

let promise = new Promise(function(resolve, reject) {
    console.log("Promise");
   // resolve();
	reject();
});

promise.then(function() {
    console.log("Resolved.");
}, function() {
    console.log("rejected.");
});

console.log("Hi!");

// create settled promise
let promise1 = Promise.resolve(42);

promise1.then(function(value) {
    console.log(value);         // 42
});


// When passed a non-promise thenable, these methods create a new promise that is called after the then() function.

let thenable = {
    then: function(resolve, reject) {
        resolve(42);
    }
};

let p1 = Promise.resolve(thenable);
p1.then(function(value) {
    console.log(value);     // 42
});

// Each call to then() or catch() actually creates and returns another promise.

let p2 = new Promise(function(resolve, reject) {
    resolve(42);
});

p2.then(function(value) {
    console.log(value);
}).then(function() {
    console.log("Finished");
});

//Wait for all promises to complete to monitor the progress off all promises

let p5 = new Promise(function(resolve, reject) {
    resolve(42);
});

let p6 = new Promise(function(resolve, reject) {
    resolve(43);
});

let p7 = new Promise(function(resolve, reject) {
    resolve(44);
});

let p4 = Promise.all([p5, p6, p7]);

p4.then(function(value) {
    console.log(Array.isArray(value));  // true
    console.log(value[0]);              // 42
    console.log(value[1]);              // 43
    console.log(value[2]);              // 44
});