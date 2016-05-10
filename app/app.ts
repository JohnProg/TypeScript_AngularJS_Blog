namespace moduleFirstDemo{
    'user strict'
    var demoModule= angular.module('demoModule',['ngRoute','common.services']);
    demoModule.config(demoRouteConfig);
    function demoRouteConfig($routeProvider:ng.route.IRouteProvider):void{
        
        $routeProvider.when('/inicio',{
            templateUrl:'app/views/inicio.html'
        }).when('/posts',{
            templateUrl:'app/views/postList.html',
            controller:'PostListController',
            controllerAs:'vm'
        }).when('/acerca',{
            templateUrl:'app/views/acerca.html'
        }).otherwise('/inicio');
        
    }
    
}