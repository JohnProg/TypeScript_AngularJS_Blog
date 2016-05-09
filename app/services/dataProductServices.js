var moduleFirstDemo;
(function (moduleFirstDemo) {
    var common;
    (function (common) {
        'use strict';
        var DataProductService = (function () {
            function DataProductService($resource) {
                this.$resource = $resource;
            }
            DataProductService.prototype.getProductResource = function () {
                return this.$resource("http://192.168.0.149:3000/products/:id");
            };
            DataProductService.$inject = ['$resource'];
            return DataProductService;
        }());
        common.DataProductService = DataProductService;
        angular
            .module('common.services')
            .service('DataProductService', DataProductService);
    })(common = moduleFirstDemo.common || (moduleFirstDemo.common = {}));
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=dataProductServices.js.map