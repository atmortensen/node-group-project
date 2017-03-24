// CONTROLLER
myApp.controller('mainCtrl', ['$scope', 'mainService', function($scope, mainService){

	$scope.getUsers = function(){
		mainService.getUsers().then(function(response){
			$scope.users = response.data;
		});
	};
	$scope.getUsers();

	$scope.deleteUser = function(id){
		mainService.deleteUser(id);
		$scope.getUsers();
	};

}]);
