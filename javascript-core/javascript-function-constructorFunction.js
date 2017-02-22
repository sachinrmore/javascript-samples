// Constructor function is function which return an object
 
function Animal(name)
{
               return{
                              getName: function(){
                                             console.log(name);
                                             return name;
                              }
               }
}
 
var obj1 = Animal('Cheetah');
obj1.getName();
var obj2 = Animal('Lion');
obj2.getName();

//new keyword create an empty object and return it even though the function does not return anything.
function constructorFunc(){

}

var obj3 = new constructorFunc();