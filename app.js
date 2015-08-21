var app = angular.module('myApp', []);

app.controller('calcCtrl', ['$scope', function ($scope) {
	$scope.result = '';

	$scope.addNumb = function (index) {
		
		$scope.result += index;
		console.log($scope.result);
	};

	$scope.clear = function () {
		$scope.result = '';
	}


}]);