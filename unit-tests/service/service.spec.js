describe("A suite is just a function", function() {
  var a;
 
var service, httpBackend, data, data1;
   
        beforeEach(angular.mock.module('productModule'));
 
         beforeEach(inject(function(categoryService,_$httpBackend_){
                         service = categoryService;
                         httpBackend = _$httpBackend_;
         }));
 
        it("Product Service should be loaded", function() {
         
            expect(service).toBeDefined();                  
        });
 
        it("Call get service with mock data", function(){
       
            httpBackend.expectGET('something/data/1').respond('some data');

            //httpBackend.whenGET('something/data/1').respond('some data'); 
       
              service.getCategories(1).then(function (result) {
                  data = result;
              });
       
              httpBackend.flush();
       
              expect(data).toBe('some data');
        }); 

        it("Call post service with mock data", function(){
       
           /* httpBackend.whenPOST('something/data/1').respond('some data');
*/
            httpBackend.expectPOST('/something').respond(9); 
       
              service.addCategory('test').then(function (result) {
                  data1 = result;
              });
       
              httpBackend.flush();
       
              expect(data1).toBe(1);
        });


 
       /* afterEach(function() {
                 $httpBackend.verifyNoOutstandingExpectation();
                 $httpBackend.verifyNoOutstandingRequest();
        });*/
});


//Difference between expect() and when() 
// expect() : test fail when the request does not invoked. 
// when() : test does not fail when the request does not invoked.
