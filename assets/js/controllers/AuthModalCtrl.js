myBlogApp.controller('AuthModalCtrl',['$scope','$http','$modalInstance','UserService','AlertService',function($scope,$http,$modalInstance,UserService,AlertService){

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

    $scope.signup = function(){

        if($scope.signupPassword != $scope.signupPasswordConfirm){
            alert('your password confirmation does not match');
            return;
        }

        var signupData={
            email:$scope.signupEmail,
            password:$scope.signupPassword,
            firstName:$scope.signupFirstName,
            lastName:$scope.signupLastName
        };

        console.log(signupData);

        $http.post('/api/user',signupData)
        .success(function(data){
            AlertService.add('success','You have been signed up.');
            $modalInstance.close();
        })
        .error(function(err){
            console.log(err);
            alert(err);
        })
    }

}]);