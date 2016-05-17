var moduleFirstDemo;
(function (moduleFirstDemo) {
    'use strict';
    var Focus = (function () {
        function Focus() {
            this.restrict = 'A';
        }
        Focus.instance = function () {
            return new Focus;
        };
        Focus.prototype.link = function (scope, elements, attrs) {
            console.log(attrs);
            setTimeout(function () {
                elements[0].focus();
            });
        };
        return Focus;
    }());
    moduleFirstDemo.Focus = Focus;
    angular.module('demoModule')
        .directive('focus', Focus.instance);
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=FocusInput.js.map