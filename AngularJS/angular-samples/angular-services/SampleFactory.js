/// <reference path="SampleService.js" />
/// <reference path="SampleProvider.js" />

var app = angular.module('app1', []);



app.controller('MainCtrl1', function ($scope, customerFactory, customerService, configurable)
{
    $scope.customers = customerFactory.getCustomers();
    $scope.totalCustomers = customerFactory.totalCustomers;
    
    $scope.customers2 = customerService.getCustomers();
    $scope.totalCustomers2 = customerService.totalCustomers;

    $scope.customerName = configurable.fullName;
});



app.factory('customerFactory', ['$http', function () {

    var factoryObj = {};
    var customers = ["a", "b", "c"];

    // use $http to load customers from db

    factoryObj.getCustomers = function ()
    {
        return customers;
    };
    
    factoryObj.PutCustomer = function (customer)
    {
        customers.push(customer);
    };

    factoryObj.totalCustomers = customers.length;
    
    return factoryObj;

}]);


app.provider('configurable', function () {

    var name = '';

    this.setName = function (newName)
    {
        name = newName;
    };

    this.$get = function () {
        return { fullName: name };
    };

});

app.config(function (configurableProvider)
{
    configurableProvider.setName("Sachin");
})