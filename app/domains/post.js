var moduleFirstDemo;
(function (moduleFirstDemo) {
    var domain;
    (function (domain) {
        var Post = (function () {
            function Post(postId, postName, postDescription, publishDate, likes, author, imageUrl, comments) {
                this.postId = postId;
                this.postName = postName;
                this.postDescription = postDescription;
                this.publishDate = publishDate;
                this.likes = likes;
                this.author = author;
                this.imageUrl = imageUrl;
                this.comments = comments;
            }
            return Post;
        }());
        domain.Post = Post;
    })(domain = moduleFirstDemo.domain || (moduleFirstDemo.domain = {}));
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=post.js.map