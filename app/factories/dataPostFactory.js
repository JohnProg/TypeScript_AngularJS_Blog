var moduleFirstDemo;
(function (moduleFirstDemo) {
    'use strict';
    var DataPostFactory = (function () {
        function DataPostFactory($http) {
            this.$http = $http;
        }
        DataPostFactory.prototype.getPosts = function () {
            return this.$http
                .get('http://104.131.28.224:3000/posts/')
                .then(function (response) {
                return response.data;
            });
        };
        DataPostFactory.prototype.savePost = function (post) {
            return this.$http
                .post('http://104.131.28.224:3000/posts/', post)
                .then(function (response) {
                return response.data;
            });
        };
        DataPostFactory.prototype.updatePost = function (post) {
            return this.$http
                .put('http://104.131.28.224:3000/posts/' + post.postId, post)
                .then(function (response) {
                return response.data;
            });
        };
        DataPostFactory.prototype.getPost = function (id) {
            return this.$http
                .get('http://104.131.28.224:3000/posts/' + id)
                .then(function (response) {
                return response.data;
            });
        };
        DataPostFactory.prototype.getComments = function (postId) {
            return this.$http
                .get('http://104.131.28.224:3000/comments/?postId=' + postId)
                .then(function (response) {
                return response.data;
            });
        };
        DataPostFactory.prototype.saveComment = function (comment) {
            return this.$http
                .post('http://104.131.28.224:3000/comments/', comment)
                .then(function (response) {
                return response.data;
            });
        };
        DataPostFactory.prototype.deletePost = function (id) {
            return this.$http
                .delete('http://104.131.28.224:3000/posts/' + id)
                .then(function (response) {
                return response.data;
            });
        };
        DataPostFactory.$inject = ['$http'];
        return DataPostFactory;
    }());
    moduleFirstDemo.DataPostFactory = DataPostFactory;
    function factory($http) {
        return new DataPostFactory($http);
    }
    angular
        .module('demoModule')
        .factory('DataPostFactory', factory);
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=dataPostFactory.js.map