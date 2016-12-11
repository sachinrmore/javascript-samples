let items = new Array(2);
console.log(items.length);          // 2
console.log(items[0]);              // undefined
console.log(items[1]);              // undefined

//Array.of() method always creates an array containing its arguments regardless of the number of arguments or the argument types.

let items2 = Array.of(2);
console.log(items2.length);          // 1
console.log(items2[0]);              // 2


//Array.from() method - Converting non-array objects into actual arrays 

var setObj = new Set();
setObj.add(1);
setObj.add(2);
setObj.add(3);

console.log(Array.from(setObj));


let numbers = [25, 30, 35, 40, 45];

console.log(numbers.find(n => n > 33));         // 35
console.log(numbers.findIndex(n => n > 33));    // 2

// Array buffers represent memory locations, and views are the interfaces you’ll use to manipulate that memory. A view operates on an array buffer or a subset of an array buffer’s bytes, reading and writing data in one of the numeric data types.

let buffer = new ArrayBuffer(2),
    view = new DataView(buffer);

view.setInt8(0, 5);
view.setInt8(1, -1);

console.log(view.getInt8(0));       // 5
console.log(view.getInt8(1));       // -1

// Creating Type specific view

let buffer1 = new ArrayBuffer(10),
    view1 = new Int8Array(buffer1),
    view2 = new Int8Array(buffer1, 5, 2);