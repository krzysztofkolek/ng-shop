app.controller('IndexCtrl', ['$scope', '$rootScope', 'Auth', function($scope, $rootScope, Auth) {
    var self = this;
    $scope.user = '';
    $scope.basket = [];
    $scope.basketVisibility = true;

    $scope.getUser = function() {
        return ($scope.user) ? 'Hello ' + $scope.user : '';
    };


    $rootScope.$on('rootScope:emit', function(event, data) {
        $scope.user = data.name;

        $scope.basketVisibility = false;
    });

    $scope.logout = function() {
        Auth.logout();
    };
}]);