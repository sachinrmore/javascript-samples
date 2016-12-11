<script type="text/javascript">

   var app = angular.module('confusionApp', []);

   app.controller('ContactController',['$scope', function($scope){

 		$scope.feedback = {mychannel:"", firstName:"", lastName:"",
                               agree:false, email:"" };
   }]);

   app.controller('FeedbackController',['$scope', function($scope){
   	
   }]);

</script>