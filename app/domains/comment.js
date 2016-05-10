var moduleFirstDemo;
(function (moduleFirstDemo) {
    var domain;
    (function (domain) {
        var Comment = (function () {
            function Comment(postId, commentId, body, createdOn, author) {
                this.postId = postId;
                this.commentId = commentId;
                this.body = body;
                this.createdOn = createdOn;
                this.author = author;
            }
            return Comment;
        }());
        domain.Comment = Comment;
    })(domain = moduleFirstDemo.domain || (moduleFirstDemo.domain = {}));
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=comment.js.map