var moduleFirstDemo;
(function (moduleFirstDemo) {
    'use strict';
    var DataProductFactory = (function () {
        function DataProductFactory($http) {
            this.$http = $http;
        }
        DataProductFactory.prototype.getProducts = function () {
            return this.$http
                .get('http://192.168.0.149:3000/products/')
                .then(function (response) {
                return response.data;
            });
        };
        DataProductFactory.$inject = ['$http'];
        return DataProductFactory;
    }());
    moduleFirstDemo.DataProductFactory = DataProductFactory;
    function factory($http) {
        return new DataProductFactory($http);
    }
    angular
        .module('demoModule')
        .factory('DataProductFactory', factory);
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=dataProductFactory.js.map