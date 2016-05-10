var moduleFirstDemo;
(function (moduleFirstDemo) {
    'user strict';
    var demoModule = angular.module('demoModule', ['ngRoute', 'common.services']);
    demoModule.config(demoRouteConfig);
    function demoRouteConfig($routeProvider) {
        $routeProvider.when('/inicio', {
            templateUrl: 'app/views/inicio.html'
        }).when('/posts', {
            templateUrl: 'app/views/postList.html',
            controller: 'PostListController',
            controllerAs: 'vm'
        }).when('/posts/new', {
            templateUrl: 'app/views/newPost.html',
            controller: 'PostListController',
            controllerAs: 'vm'
        }).when('/posts/:id', {
            templateUrl: 'app/views/viewPost.html',
            controller: 'PostViewController',
            controllerAs: 'vm'
        }).when('/acerca', {
            templateUrl: 'app/views/acerca.html'
        }).otherwise('/inicio');
    }
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=app.js.map