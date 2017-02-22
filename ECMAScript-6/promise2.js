// Promise is listener when asnyc call get complete, Promise gets notification then it call callback function based on the state of the Promise
/*A promise is always in either one of three (mutually exclusive) states:
 
Pending: the result hasn’t been computed, yet
Fulfilled: the result was computed successfully
Rejected: a failure occurred during computation*/
 
var promise = new Promise(function(resolve,reject){
 
               setTimeout(function(){
                              resolve("Success...");   //reject("Error...");                            
               },2000);
});
 
//Oneway to implement callback
promise.then(function(message){                                                           // call then  block when resolve() is called
               console.log(message);
}).catch(function(reason){                 // call catch block when reject() is called
               console.log("Rejected: " + reason);
});
 
/*  Another way to implement callback
 
promise.then(
        function (value) {  fulfillment  },
        function (reason) {  rejection  }
    );
 
               wait for promises to complete
               Promise.all(promises)then()
*/