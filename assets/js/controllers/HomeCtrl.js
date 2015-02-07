myBlogApp.controller('HomeCtrl',['$scope','$http',function($scope,$http){ 

    $scope.posts = [];

    var req = {
        url:'/.api/post',
        params:{
            'sort':'createdAt desc'
        }
    }

    $http(req).success(function(data){
        $scope.posts = data;
    });

    $scope.deletePost = function(idx){
        var postId = $scope.posts[idx].id;
        $http.delete('/.api/post/' + postId).success(function(data){
            $scope.posts.splice(idx,1);
        }).error(function(err){
            alert(err);
        })
        
    }

}]);