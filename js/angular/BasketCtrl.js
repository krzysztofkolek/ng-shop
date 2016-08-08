app.controller('BasketCtrl', ['$scope', '$location', 'BasketService', 'Auth',
	function($scope, $location, BasketService, Auth) {

	  var self = this; 
	  $scope.basket = BasketService.getBasket();
	  $scope.totalPrice = BasketService.getTotalPrice();

	  $scope.removeFromBasket = function(index) {
	  	if(Auth.isLoggedIn()) {
	  		BasketService.removeFrmBasket(index);
	  		$scope.basket = BasketService.getBasket();
	  		
	  		$scope.totalPrice = BasketService.getTotalPrice();
	  	}
	  };

	  $scope.moveToCheckOut = function() {
	  	$location.path('FirstProofOfPurchuase');
	  };



}]);