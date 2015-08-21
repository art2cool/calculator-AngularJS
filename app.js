var app = angular.module('myApp', []);

app.controller('calcCtrl', ['$scope', function ($scope) {
	$scope.result = '';

	$scope.addNumb = function (index) {
//00000
//.....
//0.050...0.
//max size=23


		$scope.result += index;
		console.log(Number($scope.result));

	};

	$scope.clear = function () {
		$scope.result = '';
	}

	$scope.backNumb = function (){
		$scope.result = $scope.result.slice(0,-1);
		}
}]);