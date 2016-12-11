
var obj = {
    
    fname: "sachin",
    "l name": "more",
    address: "pune"
};

console.log(obj.fname);
console.log(obj["fname"]);
console.log(obj["l name"]);


//Three way to enumerate properties of object - ECMAScript 5
for(p in obj){
    console.log(p);
}

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));



Object.defineProperty(obj1, "address", {set : function(x){ this.address1 = x}});

obj1.address = "India";
console.log(obj1.address);

// Delete the property
delete obj.address;