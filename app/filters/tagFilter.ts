module moduleFirstDemo {
    'use strict';
    
    export function StoreSearch() {
        return function (items: moduleFirstDemo.domain.IPost[], search: string): moduleFirstDemo.domain.IPost[] {
            var filtered = [];
            if (!search) { return items; }
            angular.forEach(items, function (item) {
                if (angular.lowercase(item.postName).indexOf(angular.lowercase(search)) != -1) {
                    filtered.push(item);
                }

            });
            return filtered;
        }
    }
    angular.module("demoModule").filter("storeSearch", StoreSearch);
}