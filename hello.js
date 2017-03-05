angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://shadrach-hello.cfapps.io/').
        then(function(response) {
            $scope.hello = response.data;
            console.log($scope.hello.response);
        });
});
