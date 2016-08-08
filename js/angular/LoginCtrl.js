app.controller('LoginCtrl', ['$scope', '$rootScope', '$location', '$routeParams', 'Auth',
    function($scope, $rootScope, $location, $routeParams, Auth) {
        var self = this;

        $scope.errorParam = $location.search().errorParam;
        $scope.visible = false;
        $scope.login = function(credentials) {
            var user = {
                name: credentials.username
            }
            Auth.setUser(user);
        };
        $scope.$watch('errorParam', function(data) {
            console.log(data);
            $scope.visible = !$scope.visible;
            if ($scope.errorParam === undefined) {
                $scope.visible = true;
            } else {
                $scope.visible = false;

            }
        });

    }
]);