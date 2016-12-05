describe('Test suite', function(){

	
	//way to share variables between a beforeEach, it, and afterEach is through the this keyword. 

	beforeEach(function(){

		this.a = 20;
	})

	it("This is spec1", function(){

		expect(this.a).toBe(20);
	})



	
})