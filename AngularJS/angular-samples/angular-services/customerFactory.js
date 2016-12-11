
app.factory('customerFactory',function(){
	var customer = {};

	customer.getCustomers = function(){
		console.log("return customers from factory");
	};

	return customer;
})

//It can return any value like primitive value, function or object. 