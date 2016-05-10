var moduleFirstDemo;
(function (moduleFirstDemo) {
    'use strict';
    var DataPostFactory = (function () {
        function DataPostFactory($http) {
            this.$http = $http;
        }
        DataPostFactory.prototype.getPosts = function () {
            return this.$http
                .get('http://192.168.0.149:3000/posts/')
                .then(function (response) {
                return response.data;
            });
        };
        DataPostFactory.$inject = ['$http'];
        return DataPostFactory;
    }());
    moduleFirstDemo.DataPostFactory = DataPostFactory;
    function factory($http) {
        return new DataPostFactory($http);
    }
    angular
        .module('demoModule')
        .factory('DataPostFactory', factory);
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=dataPostFactory.js.map