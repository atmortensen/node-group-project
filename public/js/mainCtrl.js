// CONTROLLER
myApp.controller('mainCtrl', ['$scope', 'mainService', function($scope, mainService){

	$scope.getUsers = function(){
		mainService.getUsers().then(function(resonse){
			$scope.users = resonse.data;
		});
	};

	$scope.deleteUser = function(id){
		mainService.deleteUser(id);
	};

}]);
