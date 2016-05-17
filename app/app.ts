namespace moduleFirstDemo{
    'user strict'
    var demoModule= angular.module('demoModule',['ngRoute','common.services']);
    demoModule.config(demoRouteConfig);
    function demoRouteConfig($routeProvider:ng.route.IRouteProvider):void{
        
        $routeProvider.when('/',{
            templateUrl:'app/views/postList.html',
            controller:'PostListController',
            controllerAs:'vm'
        }).when('/posts/new',{
            templateUrl:'app/views/newPost.html',
            controller:'PostListController',
            controllerAs:'vm'
        }).when('/posts/:id',{
            templateUrl:'app/views/viewPost.html',
            controller:'PostViewController',
            controllerAs:'vm'
        }).when('/admin/posts/:id',{
            templateUrl:'app/views/viewPost.html',
            controller:'PostViewController',
            controllerAs:'vm'
        }).when('/acerca',{
            templateUrl:'app/views/acerca.html'
        }).when('/admin/posts',{
            templateUrl:'app/views/admin/postList.html'
        }).otherwise('/');
        
    }
    
}