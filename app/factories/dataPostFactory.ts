namespace moduleFirstDemo {
    'use strict';

    export interface IDataPostFactory {
        getPosts: () =>ng.IPromise<moduleFirstDemo.domain.IPost[]>;
        savePost: (post: moduleFirstDemo.domain.IPost) =>ng.IPromise<moduleFirstDemo.domain.IPost>;
    }
    export class DataPostFactory implements IDataPostFactory {
        static $inject: Array<string> = ['$http'];
        constructor(private $http: ng.IHttpService) {}
        
         getPosts(): ng.IPromise<moduleFirstDemo.domain.IPost[]> {
            return this.$http
                    .get('http://192.168.0.149:3000/posts/')
                    .then((response: ng.IHttpPromiseCallbackArg<moduleFirstDemo.domain.IPost[]>): moduleFirstDemo.domain.IPost[]=> {
                            return <moduleFirstDemo.domain.IPost[]>response.data;
                });
        }
        
        savePost(post: moduleFirstDemo.domain.IPost): ng.IPromise<moduleFirstDemo.domain.IPost> {
            return this.$http
                    .post('http://192.168.0.149:3000/posts/', post)
                    .then((response: ng.IHttpPromiseCallbackArg<moduleFirstDemo.domain.IPost>): moduleFirstDemo.domain.IPost=> {
                            return <moduleFirstDemo.domain.IPost>response.data;
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