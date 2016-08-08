app.controller('ProductsCtrl', ['$scope', 'DataService', function($scope, DataService) {
    var self = this;

    $scope.data = DataService.getData().Data;

}]);