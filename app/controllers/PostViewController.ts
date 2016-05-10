namespace moduleFirstDemo {
    'use strict';
    export interface IPostViewController {
        postId: number;
        post: moduleFirstDemo.domain.IPost;
        getPost(): void;
    }

    interface IRouteParams extends ng.route.IRouteParamsService {
        id: number;
    }

    export class PostViewController implements IPostViewController {
        static $inject: Array<string> = ['DataPostFactory', '$location', '$routeParams'];
        postId: number;
        post: moduleFirstDemo.domain.IPost;

        constructor(private DataPostFactory: moduleFirstDemo.IDataPostFactory, private $location: ng.ILocationService,
            private $routeParams: IRouteParams) {
            this.postId = $routeParams.id;
            this.getPost();
        }

        getPost(): void {
            this.DataPostFactory.getPost(this.postId).then(res => {
                console.log('C:');
                this.post = res;
            });
        }
    }

    angular
        .module('demoModule')
        .controller('PostViewController', PostViewController);
}