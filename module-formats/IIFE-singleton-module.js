var obj = function(){

	function printMessage() {
		console.log('Hello IIFE');
	};
	
	return {
	printMessage : printMessage
	}
}();

obj.printMessage();
