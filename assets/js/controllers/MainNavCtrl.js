myBlogApp.controller('MainNavCtrl',['$scope','$location','$modal','UserService',function($scope,$location,$modal,UserService){
    $scope.navCollapsed=true;

    $scope.UserService = UserService;
    $scope.$watchCollection('UserService',function(){
        $scope.currentUser=UserService.currentUser;
    });

    $scope.isActive = function(url){
        return url == $location.path();
    };

    $scope.search = function(){
        $location.path('/');
        $location.search('q',$scope.searchTerm);
        //alert('search term: '+$scope.searchTerm);
    };

    $scope.showLogin = function(){
        $modal.open({
            templateUrl:'/views/authModal.html',
            controller:'AuthModalCtrl'
        })
    };

    $scope.showSignup = function(){
        $modal.open({
            templateUrl:'/views/authModal.html',
            controller:'AuthModalCtrl'
        })
    };  

    $scope.logout = function(){
        UserService.logout(function(err,data){

        });
    }

}]);