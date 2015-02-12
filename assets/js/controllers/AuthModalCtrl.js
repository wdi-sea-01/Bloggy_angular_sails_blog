myBlogApp.controller('AuthModalCtrl',['$scope','$modalInstance','UserService',function($scope,$modalInstance,UserService){

    $scope.login = function(){
        UserService.login($scope.email,$scope.password,
            function(err,data){
                if(err){
                    //server error
                    alert(err);
                }else if(data.user){
                    //successful login
                    $modalInstance.close();
                }else{
                    //login error (bad user or pass)
                    alert(data.error);
                }
            }
        );
    };

}]);