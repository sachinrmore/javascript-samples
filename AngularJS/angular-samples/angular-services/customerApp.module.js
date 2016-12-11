
var app = angular.module('serviceApp',[]);


app.controller('customerController',function($scope,customerService, customerFactory){

  $scope.customersFromService = customerService.getCustomers();
  $scope.customersFromFactory = customerFactory.getCustomers();

});

