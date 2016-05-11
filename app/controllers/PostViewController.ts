namespace moduleFirstDemo {
    'use strict';
    export interface IPostViewController {
        postId: number;
        post: moduleFirstDemo.domain.IPost;
        getPost(): void;
        addNewLike(): void;
        comment: moduleFirstDemo.domain.IComment;
    }

    interface IRouteParams extends ng.route.IRouteParamsService {
        id: number;
    }

    export class PostViewController implements IPostViewController {
        static $inject: Array<string> = ['DataPostFactory', '$location', '$routeParams'];
        postId: number;
        post: moduleFirstDemo.domain.IPost;
        comment: moduleFirstDemo.domain.IComment;

        constructor(private DataPostFactory: moduleFirstDemo.IDataPostFactory, private $location: ng.ILocationService,
            private $routeParams: IRouteParams) {
            this.postId = $routeParams.id;
            this.getPost();
        }

        getPost(): void {
            this.DataPostFactory.getPost(this.postId).then(res => {
                this.post = res;
                this.getComments();
            });
        }
        addNewLike(): void {
            this.post.likes = (this.post.likes + 1) || 0;            
            this.DataPostFactory.savePost(this.post).then(res => {
            });
        }
        getComments(): void {      
            this.DataPostFactory.getComments(this.postId).then(res => {
                this.post.comments = res.reverse();
            });
        }
        saveComment(): void {
            this.comment.createdOn = new Date();
            this.comment.postId = this.postId;
            
            this.DataPostFactory.saveComment(this.comment).then(res => {
                this.post.comments.push(res);
                this.comment = null;
                //this.$location.path('/posts');
            });
        }
        
    }

    angular
        .module('demoModule')
        .controller('PostViewController', PostViewController);
}