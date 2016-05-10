var moduleFirstDemo;
(function (moduleFirstDemo) {
    var domain;
    (function (domain) {
        var Post = (function () {
            function Post(postId, postName, postDescription, publishDate, likes, author, imageUrl) {
                this.postId = postId;
                this.postName = postName;
                this.postDescription = postDescription;
                this.publishDate = publishDate;
                this.likes = likes;
                this.author = author;
                this.imageUrl = imageUrl;
            }
            return Post;
        }());
        domain.Post = Post;
    })(domain = moduleFirstDemo.domain || (moduleFirstDemo.domain = {}));
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=post.js.map