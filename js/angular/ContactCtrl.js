app.controller('ContactCtrl', ['$scope', 'NgMap', function($scope, NgMap) {
    var self = this;
    $scope.emailAdress = '';
    $scope.message = '';


    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });


    $scope.sendmail = function() {
        $.ajax({
            type: "POST",
            url: "js/angular/mail.php",
            data: {
                'email': $scope.emailAdress,
                'message': $scope.message
            },
            success: function(data) {}
        });
    }
}]);