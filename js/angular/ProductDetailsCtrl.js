app.controller('ProductDetailsCtrl', ['$scope', 'ProductDetailsService', 'DataService',

    function($scope, ProductDetailsService, DataService) {

        var self = this;
        $scope.productDetailsInfo = ProductDetailsService.getProductDetailsService();
        $scope.product = DataService.getDataByIndexAndCategoryName(ProductDetailsService.getProductDetailsService().productDetailsIndex,
            ProductDetailsService.getProductDetailsService().selectedCategory);
        $scope.getInStock = function() {
            if (Boolean($scope.product.details.inStock)) {
                return 'ok';
            }
            return 'remove';
        };
    }
]);