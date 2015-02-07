var myBlogApp = angular.module('BlogApp',['ui.bootstrap','ngRoute']);

myBlogApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

    //no more #!
    $locationProvider.html5Mode(true);

    //define routes
    $routeProvider
    .when('/',{
        templateUrl:'/views/home.html',
        controller:'HomeCtrl'
    })
    .when('/post/new',{
        templateUrl:'/views/post/new.html',
        controller:'PostNewCtrl'
    })    
    .when('/post/:id',{
        templateUrl:'/views/post/show.html',
        controller:'PostShowCtrl'
    })


}])