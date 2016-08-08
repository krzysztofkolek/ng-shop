app.controller('CategoryCtrl', ['$scope', '$routeParams', '$timeout', '$route', '$location',
    'DataService', 'BasketService', 'Auth', 'ProductDetailsService',

    function($scope, $routeParams, $timeout, $route, $location,
        DataService, BasketService, Auth, ProductDetailsService) {
        var self = this;
        $scope.order_id = $routeParams.orderId;
        $scope.data = DataService.getData($location.path().split('/')[2]);

        $scope.getData = function() {
            return $scope.data;
        }


        $scope.addToBasket = function(index) {
            if (Auth.isLoggedIn()) {
                BasketService.addToBasket($scope.data[index]);
            }
        };

        $scope.productDetails = function(index) {
            ProductDetailsService.setProductDetailsIndexAndCategoryName(index, $location.path().split('/')[2]);
            $location.path('ProductDetails');
        };
    }
]);