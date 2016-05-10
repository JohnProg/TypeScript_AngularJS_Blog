var moduleFirstDemo;
(function (moduleFirstDemo) {
    'use strict';
    var PostViewController = (function () {
        function PostViewController(DataPostFactory, $location, $routeParams) {
            this.DataPostFactory = DataPostFactory;
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.postId = $routeParams.id;
            this.getPost();
        }
        PostViewController.prototype.getPost = function () {
            var _this = this;
            this.DataPostFactory.getPost(this.postId).then(function (res) {
                console.log('C:');
                _this.post = res;
            });
        };
        PostViewController.$inject = ['DataPostFactory', '$location', '$routeParams'];
        return PostViewController;
    }());
    moduleFirstDemo.PostViewController = PostViewController;
    angular
        .module('demoModule')
        .controller('PostViewController', PostViewController);
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=PostViewController.js.map