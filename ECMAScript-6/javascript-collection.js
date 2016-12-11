// map is collection of key/value pairs which store any type of data. It does not contains duplicate key. 

var mapObj = new Map();

mapObj.clear();

mapObj.set(1,"t");  //add new element
mapObj.set(2,"r");
mapObj.set(3,"w");
mapObj.set("four",4);
mapObj.set(3,"www"); //it will overwrite value of duplicate key

console.log("Map collection");

mapObj.forEach(function(value2, key){
    
    console.log(key + ' ' + value2);
})

console.log(mapObj.get("four")); //get specific element
mapObj.has(3) // Determines if the given key exists in the map

console.log(mapObj.size);

// Map initialization
 let map = new Map([["name", "Nicholas"], ["age", 25]]);

//WeakMap -  store weak object references. In weak maps, every key must be an object (an error is thrown if you try to use a non-object key), and those object references are held weakly so they don’t interfere with garbage collection. When there are no references to a weak map key outside a weak map, the key-value pair is removed from the weak map.

// Set - A collection of unique values that may be of any type.

var setObj = new Set();

setObj.add('a');
setObj.add("hello");
setObj.add(5);
console.log("Size" + setObj.size);

setObj.has(5);

setObj.forEach(function(item){
    
    console.log(item);
})


setObj.delete('s');

console.log('Convert set collection to Array');

var arrObj = Array.from(setObj);

arrObj.forEach(function(item){
    
    console.log(item);
})

var arrObj1 = [...setObj];

arrObj1.forEach(function(item){
    
    console.log(item);
})

//Set hold the value of object eventhough that object is set to null

let set = new Set(),
    key = {};

set.add(key);
console.log(set.size);      // 1

// eliminate original reference
key = null;

console.log(set.size);      // 1

// get the original reference back
key = [...set][0];

// WeakSet only store weak object references and cannot store primitive values

let weakset = new WeakSet(),
    key1 = {};

weakset.add(key1);
weakset.add({});

// eliminate original reference
key1 = null;

console.log(weakset.size);      // undefined

//Limitation og Weakset
//In a WeakSet instance, the add() method, has() method, and delete() method all throw an error when passed a non-object.
//Weak sets are not iterables and therefore cannot be used in a for-of loop.
//Weak sets do not expose any iterators (such as the keys() and values() methods), so there is no way to programmatically determine the contents of a weak set.
//Weak sets do not have a forEach() method.
//Weak sets do not have a size property.


