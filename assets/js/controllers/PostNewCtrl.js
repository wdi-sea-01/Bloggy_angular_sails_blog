myBlogApp.controller('PostNewCtrl',['$scope','$http','$location',function($scope,$http,$location){
    $scope.createPost = function(){
        $scope.alert=false;
        var data = {
            title:$scope.title,
            body:$scope.body
        };
        $http.post('/api/post',data).success(function(data){
            $scope.alert="Your post has been created.";
            $scope.title="";
            $scope.body="";
        }).error(function(err){
            alert(err);
        })
    }
}]);