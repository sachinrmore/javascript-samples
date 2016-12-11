
var empObj = {
            name : "sachin",
            address : "pune",
            dept : "IT"    
}

// for..in is used to iterate over properties of object
for(e in empObj){
    console.log(e);
}

//for..of is used to iterate over array, Map, Set, arguments
var arr = [2,3,4,5];

for(a of arr){
    
    console.log(a);
}
   

var arr2 = ["school", "book", "bag",55]

for(a of arr2){
    console.log(a);
}