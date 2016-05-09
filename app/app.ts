namespace moduleFirstDemo{
    'user strict'
    var demoModule= angular.module('demoModule',['ngRoute','common.services']);
    demoModule.config(demoRouteConfig);
    function demoRouteConfig($routeProvider:ng.route.IRouteProvider):void{
        
        $routeProvider.when('/inicio',{
            templateUrl:'app/views/inicio.html'
        }).when('/products',{
            templateUrl:'app/views/productList.html',
            controller:'ProductListController',
            controllerAs:'vm'
        }).when('/acerca',{
            templateUrl:'app/views/acerca.html'
        }).otherwise('/inicio');
        
    }
    
}