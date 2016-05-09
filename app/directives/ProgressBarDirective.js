var moduleFirstDemo;
(function (moduleFirstDemo) {
    'use strict';
    var Progressbar = (function () {
        function Progressbar() {
            this.scope = {
                'showProgress': '='
            };
            this.restrict = 'E';
            //template='<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="{{ value }}" aria-valuemin="0" aria-valuemax="100" style="width: {{ value }}%;"><span class="sr-only">60% Complete</span></div></div><div><span>{{ value }}% Completed</span></div>';
            this.templateUrl = 'app/directives/progressBar.html';
        }
        Progressbar.instance = function () {
            return new Progressbar;
        };
        Progressbar.prototype.link = function (scope, elements, attrs) {
            scope.value = 0;
            console.log(scope.showProgress);
            setInterval(function () {
                scope.$apply(function () {
                    if (scope.value >= 100) {
                        scope.value = 0;
                        return;
                    }
                    scope.value = scope.value + 10;
                });
            }, 1000);
        };
        return Progressbar;
    }());
    moduleFirstDemo.Progressbar = Progressbar;
    angular.module('demoModule')
        .directive('progressBar', Progressbar.instance);
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=ProgressBarDirective.js.map