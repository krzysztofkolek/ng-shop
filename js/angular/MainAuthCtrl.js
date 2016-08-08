app.controller('MainAuthCtrl', ['$scope', '$rootScope', 'Auth', 'DataService', 'MainDataService',

    function($scope, $rootScope, Auth, DataService, MainDataService) {
        var self = this;

        $rootScope.$emit('rootScope:emit', Auth.isLoggedIn()); // going up!

        $scope.getData = function(index) {
            return MainDataService.returnData800300().data[index];
        };

        $scope.getDataMin = function(index) {
            return MainDataService.returnData320150().data[index];
        };
    }
]);