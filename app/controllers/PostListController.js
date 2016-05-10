var moduleFirstDemo;
(function (moduleFirstDemo) {
    'use strict';
    var PostListController = (function () {
        function PostListController(DataPostService, DataPostFactory, $location) {
            var _this = this;
            this.DataPostService = DataPostService;
            this.DataPostFactory = DataPostFactory;
            this.$location = $location;
            this.title = "Product list";
            this.showImage = false;
            this.posts = [];
            this.showProgress = true;
            setTimeout(function () {
                _this.DataPostFactory.getPosts().then(function (res) {
                    _this.posts = res;
                    _this.showProgress = false;
                });
            }, 0);
        }
        PostListController.prototype.toggleImage = function () {
            this.showImage = !this.showImage;
        };
        PostListController.prototype.savePost = function () {
            var _this = this;
            this.DataPostFactory.savePost(this.currentPost).then(function (res) {
                console.log('GRABE CHORRI');
                console.log(res);
                _this.$location.path('/posts');
            });
        };
        PostListController.$inject = ['DataPostService', 'DataPostFactory', '$location'];
        return PostListController;
    }());
    moduleFirstDemo.PostListController = PostListController;
    angular
        .module('demoModule')
        .controller('PostListController', PostListController);
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=PostListController.js.map