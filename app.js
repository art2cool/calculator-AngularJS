var app = angular.module('myApp', []);

app.controller('calcCtrl', ['$scope', function ($scope) {
	$scope.result = '';
	$scope.opp='';
	var validate = function (index) {
		if($scope.result.length < 23 ) {
			if( index === '.' && $scope.result.indexOf('.') >= 0 ) 	return false;
		
			if ( index === '0' && $scope.result.substring(0,1) === '0' && $scope.result.substring(0,2) !== "0." ) return false;
				
			return true;
		
		}
	};

	$scope.addNumb = function (index) {

		$scope.result = String($scope.result);
		console.log(validate(index));
		if (validate(index)) {

			if($scope.employed){ $scope.result = ''; $scope.employed = false };
			
			$scope.result += index;
			//console.log($scope.result);
		}  else console.log('enter fail');
	};

	$scope.clear = function () {
		$scope.result = '';
		$scope.opp = ''
		$scope.a = '';
	}

	$scope.backNumb = function () {
		$scope.result = String($scope.result);
		$scope.result = $scope.result.slice(0,-1);
		}

	$scope.action = function (index) {
		$scope.employed = true;

		if (!$scope.opp) {
			$scope.a = Number($scope.result); 
			$scope.opp = index;
		} else {
			$scope.b = Number($scope.result);
			switch($scope.opp) {
				case '+': $scope.result = $scope.a + $scope.b;
					break;
				case '-': $scope.result = $scope.a - $scope.b;
					break;
				case '*': $scope.result = $scope.a * $scope.b;
					break;
				case '/': $scope.result = $scope.a / $scope.b;
					break;
				case '=': $scope.opp = '';
					break;
				default: 
					break;
			}
			

			$scope.a = $scope.result;
			$scope.opp = index;
			$scope.b = 0;
		} 

	
	
	}



}]);