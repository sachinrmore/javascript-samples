//Revealing module pattern - Constructor function

//Constructor function name start with capital letter
var Messanger = function(){      

	function printMessage() {
		console.log('Create a module using Constructor function');
	};
	
	return {
	printMessage : printMessage
	}
};

var obj = new Messanger();
obj.printMessage();