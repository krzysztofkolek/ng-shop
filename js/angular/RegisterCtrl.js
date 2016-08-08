app.controller('RegisterCtrl', ['$scope', 'Auth', function($scope, Auth) {
    var self = this;

    $scope.usermodel = {};
    $scope.usermodel.firstname = '';
    $scope.usermodel.lastname = '';
    $scope.usermodel.adress = '';
    $scope.usermodel.city = '';
    $scope.usermodel.state = '';
    $scope.usermodel.zipcode = '';
    $scope.usermodel.title = '';
    $scope.usermodel.company = '';
    $scope.usermodel.phonenumebr = '';
    $scope.usermodel.email = '';
    $scope.usermodel.website = '';

    $scope.error = {};
    $scope.error.visible = false;
    $scope.error.message = [];

    $scope.checkEnteredData = function() {
        $scope.error.visible = false;
        $scope.error.message = [];


        if ($scope.usermodel == '') {

        }
        if ($scope.usermodel.firstname == '') {

        }
        if ($scope.usermodel.lastname == '') {

        }
        if ($scope.usermodel.adress == '') {

        }
        if ($scope.usermodel.city == '') {

        }
        if ($scope.usermodel.state == '') {

        }
        if ($scope.usermodel.zipcode == '') {

        }
        if ($scope.usermodel.title == '') {

        }
        if ($scope.usermodel.company == '') {

        }
        if ($scope.usermodel.phonenumebr == '') {

        }
        if ($scope.usermodel.email == '') {
            $scope.error.visible = true;
            $scope.error.message.push('Please enter the email adress');
        }
        if ($scope.usermodel.website == '') {

        }
    };

    $scope.submitRegistration = function() {
        $scope.checkEnteredData();
        if (!$scope.error.visible) {
            var user = {
                name: $scope.usermodel.email
            }
            Auth.setUser(user);
            $location.path('Main');
        }
    };

}]);