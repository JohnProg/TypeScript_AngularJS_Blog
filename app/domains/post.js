var moduleFirstDemo;
(function (moduleFirstDemo) {
    var domain;
    (function (domain) {
        var Post = (function () {
            function Post(postId, postName, postDescription, postShortDescription, publishDate, likes, author, imageUrl, comments, tags) {
                this.postId = postId;
                this.postName = postName;
                this.postDescription = postDescription;
                this.postShortDescription = postShortDescription;
                this.publishDate = publishDate;
                this.likes = likes;
                this.author = author;
                this.imageUrl = imageUrl;
                this.comments = comments;
                this.tags = tags;
            }
            return Post;
        }());
        domain.Post = Post;
    })(domain = moduleFirstDemo.domain || (moduleFirstDemo.domain = {}));
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=post.js.map