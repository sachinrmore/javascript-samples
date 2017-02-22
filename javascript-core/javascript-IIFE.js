
// It executes block immediately.
// IIFE helps to define module in javascript, it contains public and private functions
(function(globalObj)
{
               console.log('IIFE function');
 
               //private function
               function func2(){

                       console.log('Private function');
               }
 
               //public function
               globalObj.func1 = function(){
                    
                              console.log('Call function on global object');
                              func2();
               }
})(this);
 
this.func1();