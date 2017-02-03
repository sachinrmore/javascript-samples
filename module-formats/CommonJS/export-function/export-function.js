var Messager = function(){      

	function printMessage() {
		console.log('Hello world 2');
	};
	
	return {
	printMessage : printMessage
	}
};

module.exports = Messager;