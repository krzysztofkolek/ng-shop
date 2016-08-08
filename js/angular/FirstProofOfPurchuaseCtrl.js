app.controller('FirstProofOfPurchuaseCtrl', ['$scope', '$rootScope', '$location', 'Auth',

    function($scope, $rootScope, $location, Auth) {
        var self = this;

        $scope.shippingInformation = {};
        $scope.shippingInformation.fullName = '';
        $scope.shippingInformation.adressLineOne = '';
        $scope.shippingInformation.adressLineTwo = '';
        $scope.shippingInformation.city = '';
        $scope.shippingInformation.state = '';
        $scope.shippingInformation.zipCode = '';
        $scope.shippingInformation.country = '';

        $scope.error = {};
        $scope.error.visible = false;
        $scope.error.message = [];

        $scope.chceckModel = function() {
            $scope.error.visible = false;
            $scope.error.message = [];
            if ($scope.shippingInformation.fullName == '') {
                $scope.error.visible = true;
                $scope.error.message.push('Empty full name');
            }
            if ($scope.shippingInformation.adressLineOne == '') {
                $scope.error.visible = true;
                $scope.error.message.push('Empty adress one');
            }
            if ($scope.shippingInformation.adressLineTwo == '') {
                $scope.error.visible = true;
                $scope.error.message.push('Empty adress two');
            }
            if ($scope.shippingInformation.city == '') {
                $scope.error.visible = true;
                $scope.error.message.push('Empty city');
            }
            if ($scope.shippingInformation.state == '') {
                $scope.error.visible = true;
                $scope.error.message.push('Empty state');
            }
            if ($scope.shippingInformation.zipCode == '') {
                $scope.error.visible = true;
                $scope.error.message.push('Empty zip code');
            }
            if ($scope.shippingInformation.country == '') {
                $scope.error.visible = true;
                $scope.error.message.push('Empty country');
            }
        };


        $scope.moveToCheckOut = function() {
            $scope.chceckModel();
            if (!$scope.error.visible) {
                $location.path('SecondProofOfPurchuase');
            }
        };

    }
]);