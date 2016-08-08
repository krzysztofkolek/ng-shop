app.controller('AccountInformationCtrl', ['$scope', 'Auth', function($scope, Auth) {
    var self = this;
    $scope.user = Auth.getUser();

    $scope.email = $scope.user.name;
    $scope.firstname = "mock first";
    $scope.lastname = "mock last";
    $scope.city = "mock city";


}]);