

app.service('customerService', ['$http', function () {

    var customers = ["a", "b", "c", "d"];

    // use $http to load customers from db

    this.getCustomers = function ()
    {
        return customers;
    };
    
    this.PutCustomer = function (customer)
    {
        customers.push(customer);
    };

    this.totalCustomers = customers.length;

}]);

