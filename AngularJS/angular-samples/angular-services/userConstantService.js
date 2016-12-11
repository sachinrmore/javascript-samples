

app.constant('UserId2', 300);

app.controller('constantController', function($scope, UserId2){

	UserId2 = 400; // it should not allow to change value.
	console.log(UserId2);
	
});