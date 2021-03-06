// SERVICE
myApp.service('mainService', ['$http', function($http){

	this.getUsers = function(){
		return $http({
			url: '/api/users',
			method: 'GET'
		});
	};

	this.deleteUser = function(id){
		return $http({
			url: '/api/users/'+ id,
			method: 'DELETE'
		});
	};

}]);
