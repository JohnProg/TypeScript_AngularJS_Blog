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
                    _this.posts = res.reverse();
                    _this.showProgress = false;
                });
            }, 0);
        }
        PostListController.prototype.savePost = function () {
            var _this = this;
            this.currentPost.publishDate = new Date();
            this.currentPost.author = "John"; // TODO: should load from session :v
            this.currentPost.likes = 0;
            this.currentPost.tags = ["js", "html", "ionic"];
            if (tinyMCE) {
                this.currentPost.postDescription = tinyMCE.activeEditor.getContent();
            }
            this.DataPostFactory.savePost(this.currentPost).then(function (res) {
                _this.$location.path('/posts');
            });
        };
        PostListController.prototype.deletePost = function (index) {
            var _this = this;
            console.log('WTF ' + index);
            var id = this.posts[index]['id'];
            console.log('ID', this.posts);
            this.DataPostFactory.deletePost(id).then(function (res) {
                _this.posts.splice(index, 1);
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