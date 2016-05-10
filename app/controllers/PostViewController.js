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
                _this.post = res;
                _this.getComments();
            });
        };
        PostViewController.prototype.addNewLike = function () {
            this.post.likes = (this.post.likes + 1) || 0;
            this.DataPostFactory.savePost(this.post).then(function (res) {
            });
        };
        PostViewController.prototype.getComments = function () {
            var _this = this;
            this.DataPostFactory.getComments(this.postId).then(function (res) {
                _this.post.comments = res;
            });
        };
        PostViewController.prototype.saveComment = function () {
            var _this = this;
            this.comment.createdOn = new Date();
            this.comment.postId = this.postId;
            this.DataPostFactory.saveComment(this.comment).then(function (res) {
                _this.post.comments.push(res);
                _this.comment = null;
                //this.$location.path('/posts');
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