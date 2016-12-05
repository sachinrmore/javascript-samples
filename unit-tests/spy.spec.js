describe("A spy", function() {
  var obj, obj1, name = null;

  beforeEach(function() {
      obj = {
          setName: function(value) {
            name = value;
          },

          getName: function(){
            return name;
          }
        
      };

      spyOn(obj, 'setName');
      obj.setName('Google');
      spyOn(obj,'getName').and.returnValue('Microsoft');
      obj1 = obj.getName();
      
    });

  it("tracks that the spy was called", function() {
   
      expect(obj.setName).toHaveBeenCalled();
  });


  it("tracks all the arguments of its calls", function() {

      expect(obj.setName).toHaveBeenCalledWith('Google');

  });

 

  it("Return specific value", function() {

      expect(obj1).toEqual('Microsoft');

  });

});