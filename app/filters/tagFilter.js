var moduleFirstDemo;
(function (moduleFirstDemo) {
    'use strict';
    function StoreSearch() {
        return function (items, search) {
            var filtered = [];
            if (!search) {
                return items;
            }
            angular.forEach(items, function (item) {
                if (angular.lowercase(item.postName).indexOf(angular.lowercase(search)) != -1) {
                    filtered.push(item);
                }
            });
            return filtered;
        };
    }
    moduleFirstDemo.StoreSearch = StoreSearch;
    angular.module("mallApp").filter("storeSearch", StoreSearch);
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=tagFilter.js.map