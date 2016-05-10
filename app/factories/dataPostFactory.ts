namespace moduleFirstDemo {
    'use strict';

    export interface IDataPostFactory {
        getPosts: () => ng.IPromise<moduleFirstDemo.domain.IPost[]>;
        savePost: (post: moduleFirstDemo.domain.IPost) => ng.IPromise<moduleFirstDemo.domain.IPost>;
        getPost: (id: number) => ng.IPromise<moduleFirstDemo.domain.IPost>;
        getComments: (id: number) => ng.IPromise<moduleFirstDemo.domain.IComment[]>;
        saveComment: (comment: moduleFirstDemo.domain.IComment) => ng.IPromise<moduleFirstDemo.domain.IComment>;
    }
    export class DataPostFactory implements IDataPostFactory {
        static $inject: Array<string> = ['$http'];
        constructor(private $http: ng.IHttpService) { }

        getPosts(): ng.IPromise<moduleFirstDemo.domain.IPost[]> {
            return this.$http
                .get('http://104.131.28.224:3000/posts/')
                .then((response: ng.IHttpPromiseCallbackArg<moduleFirstDemo.domain.IPost[]>): moduleFirstDemo.domain.IPost[] => {
                    return <moduleFirstDemo.domain.IPost[]>response.data;
                });
        }

        savePost(post: moduleFirstDemo.domain.IPost): ng.IPromise<moduleFirstDemo.domain.IPost> {
            return this.$http
                .post('http://104.131.28.224:3000/posts/', post)
                .then((response: ng.IHttpPromiseCallbackArg<moduleFirstDemo.domain.IPost>): moduleFirstDemo.domain.IPost => {
                    return <moduleFirstDemo.domain.IPost>response.data;
                });
        }
        
        updatePost(post: moduleFirstDemo.domain.IPost): ng.IPromise<moduleFirstDemo.domain.IPost> {
            return this.$http
                .put('http://104.131.28.224:3000/posts/' + post.postId, post)
                .then((response: ng.IHttpPromiseCallbackArg<moduleFirstDemo.domain.IPost>): moduleFirstDemo.domain.IPost => {
                    return <moduleFirstDemo.domain.IPost>response.data;
                });
        }
        
        getPost(id: number): ng.IPromise<moduleFirstDemo.domain.IPost> {
            return this.$http
                .get('http://104.131.28.224:3000/posts/' + id)
                .then((response: ng.IHttpPromiseCallbackArg<moduleFirstDemo.domain.IPost>): moduleFirstDemo.domain.IPost => {
                    return <moduleFirstDemo.domain.IPost>response.data;
                });
        }
        getComments(postId: number): ng.IPromise<moduleFirstDemo.domain.IComment[]> {
            return this.$http
                .get('http://104.131.28.224:3000/comments/?postId=' + postId)
                .then((response: ng.IHttpPromiseCallbackArg<moduleFirstDemo.domain.IComment[]>): moduleFirstDemo.domain.IComment[] => {
                    return <moduleFirstDemo.domain.IComment[]>response.data;
                });
        }
        saveComment(comment: moduleFirstDemo.domain.IComment): ng.IPromise<moduleFirstDemo.domain.IComment> {
            return this.$http
                .post('http://104.131.28.224:3000/comments/', comment)
                .then((response: ng.IHttpPromiseCallbackArg<moduleFirstDemo.domain.IComment>): moduleFirstDemo.domain.IComment => {
                    return <moduleFirstDemo.domain.IComment>response.data;
                });
        }
    }
    function factory($http: ng.IHttpService): IDataPostFactory {
        return new DataPostFactory($http);
    }
    angular
        .module('demoModule')
        .factory('DataPostFactory', factory);
}