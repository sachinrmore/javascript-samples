
var arrObj1 = new Array('Sachin','Riyansh','Amol');

var arrObj2 = ['Sachin','Riyansh','Amol'];

console.log(arrObj1[2]);

console.log(arrObj1[5]); // out of range returns undefined.

var l1 = arrObj1.push('Praveen');
console.log('array length after adding new element: ' + l1);

l1 = arrObj1.pop()
console.log('removed element: ' + l1);


l1 = arrObj2.shift();
console.log('removed first element' + l1);

l1 = arrObj2.unshift('Gopal');
console.log('add first element into array ' + l1);


// position to add/remove items, no. of items to be removed, new items to be added 
arrObj1.splice(2,0,'Sameer', 'Sujay');   //  add element at certain position

arrObj1.forEach(function(item, index){
    
    console.log(item + " " + index);
   
})

arrObj1.splice(0,2);   // remove first 2 elements 


arrObj1.forEach(function(item, index){
    
    console.log(item + " " + index);
   
})