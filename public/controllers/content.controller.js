angular.module('familielejr')

.controller('contentCtrl', ['$scope', '$http', '$location', 'AuthService', function($scope, $http, $location, AuthService) {

    $scope.isLoggedIn = false;
    AuthService.getUserStatus().then(function() {
        if (AuthService.isLoggedIn()) {
            $scope.isLoggedIn = true;
        };
    });
    
}]);
