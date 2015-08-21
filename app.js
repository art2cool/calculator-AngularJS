var app = angular.module('myApp', []);

app.controller('calcCtrl', ['$scope', function ($scope) {
	$scope.result = '';

	$scope.validate = function (index) {
		if($scope.result.length < 23 ) {
			if( index === '.' && $scope.result.indexOf('.') >= 0 ) { 
					return false;
			} else {
				if ( index === '0' && $scope.result.substring(0,1) === '0' && $scope.result.substring(0,2) !== "0." ) {
					return false;
				} else {
					return true;
				}
			}
		}
	};

	$scope.addNumb = function (index) {
		if ($scope.validate(index)) {

			$scope.result += index;
			console.log(Number($scope.result));
		} else {
			console.log($scope.validate(index) );
		}
	};

	$scope.clear = function () {
		$scope.result = '';
	}

	$scope.backNumb = function (){
		$scope.result = $scope.result.slice(0,-1);
		}
}]);