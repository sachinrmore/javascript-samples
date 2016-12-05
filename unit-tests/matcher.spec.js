
describe('Test suite', function(){

	it('toBe matcher works', function(){

		let a = 10;
		let b = 10;
		expect(a).toBe(b);
		expect(a).not.toBe(null);
		 expect(a).not.toBeNull();
	})

	it("should work for objects", function() {

		      var foo = {
		        a: 12,
		        b: 34
		      };

		      var bar = {
		        a: 12,
		        b: 34
		      };

      expect(foo).toEqual(bar);

    });


     it("The 'toBeDefined' matcher compares against `undefined`", function() {
		    var a = {
		      foo: "foo"
		    };

		    expect(a.foo).toBeDefined();
		    expect(a.bar).not.toBeDefined();
		    expect(a.foo).not.toBeUndefined();
  	});

     it("The matcher is for boolean casting testing", function() {
		    var a = false, foo = "foo";

		    expect(foo).toBeTruthy();
		    expect(a).toBeFalsy();
	  });


 

})


//Other matcher
// toContain(), toBeLessThan(), toBeGreaterThan(), toThrow(), toThrowError()
