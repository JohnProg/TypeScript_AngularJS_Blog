var moduleFirstDemo;
(function (moduleFirstDemo) {
    'user strict';
    var demoModule = angular.module('demoModule', ['ngRoute', 'common.services']);
    demoModule.config(demoRouteConfig);
    function demoRouteConfig($routeProvider) {
        $routeProvider.when('/inicio', {
            templateUrl: 'app/views/inicio.html'
        }).when('/products', {
            templateUrl: 'app/views/productList.html',
            controller: 'ProductListController',
            controllerAs: 'vm'
        }).when('/acerca', {
            templateUrl: 'app/views/acerca.html'
        }).otherwise('/inicio');
    }
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=app.js.map