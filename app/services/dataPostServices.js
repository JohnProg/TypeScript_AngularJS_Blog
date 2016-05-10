var moduleFirstDemo;
(function (moduleFirstDemo) {
    var common;
    (function (common) {
        'use strict';
        var DataPostService = (function () {
            function DataPostService($resource) {
                this.$resource = $resource;
            }
            DataPostService.prototype.getPostResource = function () {
                return this.$resource("http://104.131.28.224:3000/posts/:id");
            };
            DataPostService.$inject = ['$resource'];
            return DataPostService;
        }());
        common.DataPostService = DataPostService;
        angular
            .module('common.services')
            .service('DataPostService', DataPostService);
    })(common = moduleFirstDemo.common || (moduleFirstDemo.common = {}));
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=dataPostServices.js.map