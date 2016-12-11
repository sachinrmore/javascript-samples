
function Message2(text)
{
	this.text = text;
};

app.provider("message", function () {
    var text = null;

    this.setText = function (textString) {
        text = textString;
    };

    this.$get = function () {
        return new Message2(text);
    };
});

// angular.module('serviceApp').config(['messageProvider', function(messageProvider){
// 	messageProvider.setText("Hello world");
// }]);

app.controller('messageController', function($scope, message){
	 console.log(message.text);
});