var moduleFirstDemo;
(function (moduleFirstDemo) {
    'use strict';
    var PostListController = (function () {
        function PostListController(DataPostService, DataPostFactory) {
            var _this = this;
            this.DataPostService = DataPostService;
            this.DataPostFactory = DataPostFactory;
            this.title = "Product list";
            this.showImage = false;
            this.posts = [];
            this.showProgress = true;
            setTimeout(function () {
                _this.DataPostFactory.getPosts().then(function (res) {
                    _this.posts = res;
                    _this.showProgress = false;
                });
            }, 2000);
        }
        PostListController.prototype.toggleImage = function () {
            this.showImage = !this.showImage;
        };
        PostListController.$inject = ['DataPostService', 'DataPostFactory'];
        return PostListController;
    }());
    moduleFirstDemo.PostListController = PostListController;
    angular
        .module('demoModule')
        .controller('PostListController', PostListController);
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=PostListController.js.map