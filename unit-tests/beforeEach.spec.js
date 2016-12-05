
describe('Test suite', function(){

	beforeAll(function(){
		console.log("called only once before all specs");
	})

	beforeEach(function(){

		console.log("This is called before each spec");
	})

	it("This is spec", function(){

	})

	afterEach(function(){
		console.log("This is called after each spec");

	})

	afterAll(function(){
		console.log("called only once after all specs");
	})
})