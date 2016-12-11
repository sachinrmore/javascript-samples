
app.value("UserId", 20);

app.value("UserName", "sachin");

app.value("user", { UserId : 100, UserName : "SM"});

app.controller('valueController2', function($scope, user){

	user.UserId = 200;
	console.log(user.UserId);
	console.log(user.UserName);
});