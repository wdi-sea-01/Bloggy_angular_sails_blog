myBlogApp.controller('PostShowCtrl',['$scope','$http','$routeParams','$location','$modal',function($scope,$http,$routeParams,$location,$modal){
    var postId = $routeParams.id;
    $scope.comments=[];
    
    $http.get('/api/post/'+postId)
    .success(function(data){
        $scope.post=data;
    }).error(function(err){
        $location.path('/');
        alert('that post could not be found.');
    });

    $http.get('/api/post/'+postId+'/comments')
    .success(function(data){
        $scope.comments=data;
    });


    $scope.editPost = function(){
        $modal.open({
            templateUrl:'/views/post/editModal.html',
            controller:'PostEditModalCtrl',
            resolve:{
                post:function(){
                    return $scope.post;
                }
            }
        }).result.then(function(updatePost){
            $scope.post=updatePost;
        },function(){
            //alert('modal closed with cancel');
        })
    }

    $scope.addComment = function(){

        var commentData={body:$scope.commentText};
            
        $http.post('/api/post/'+postId+'/comments',commentData)
        .success(function(data){
            $scope.commentText="";
            $scope.comments.unshift(data);
        }).error(function(err){
            alert(err);
        });

    }

}]);