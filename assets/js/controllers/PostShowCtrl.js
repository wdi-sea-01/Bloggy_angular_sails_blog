myBlogApp.controller('PostShowCtrl',['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location){
    var postId = $routeParams.id;
    $http.get('/.api/post/'+postId).success(function(data){
        $scope.post=data;
    }).error(function(err){
        $location.path('/');
        alert('that post could not be found.');
    })
}]);