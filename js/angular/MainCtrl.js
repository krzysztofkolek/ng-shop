app.controller('MainCtrl', ['$scope', '$routeParams', 'DataService', 'MainDataService',

    function($scope, $routeParams, DataService, MainDataService) {
        var self = this;

        $scope.getData = function(index) {
            return MainDataService.returnData800300().data[index];
        };

        $scope.getDataMin = function(index) {
            return MainDataService.returnData320150().data[index];
        };

    }
]);