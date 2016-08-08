app.controller('SecondProofOfPurchuaseCtrl', ['$scope', '$rootScope', '$location', 'Auth',

    function($scope, $rootScope, $location, Auth) {
        var self = this;

        $scope.moveToMenu = function() {
            $location.path('Main');
        };
    }
]);