namespace moduleFirstDemo {
    'use strict';
    export interface IPostListController{
        title:string;
        showImage:boolean;
        posts:moduleFirstDemo.domain.IPost[];
        currentPost: moduleFirstDemo.domain.IPost;
        savePost():void;
    }
    export class PostListController implements IPostListController{
       static $inject: Array<string> = ['DataPostService','DataPostFactory','$location'];
        //constructor(private dependency1: dependency1Type) {}
        title:string;
        showImage:boolean;
        posts:moduleFirstDemo.domain.IPost[];
        currentPost: moduleFirstDemo.domain.IPost;
        showProgress:boolean;
        
        constructor(private DataPostService: moduleFirstDemo.common.IDataPostService,
        private DataPostFactory: moduleFirstDemo.IDataPostFactory, private $location: ng.ILocationService){
            this.title="Product list";
            this.showImage = false;
            this.posts = [];
            this.showProgress = true;
            setTimeout(()=> {
                this.DataPostFactory.getPosts().then(
                res=>{
                    this.posts = res.reverse();
                    this.showProgress = false;
                }
            );
            }, 0);
        }
        

        savePost(): void {
            this.currentPost.publishDate = new Date();
            this.currentPost.author = "John"; // TODO: should load from session :v
            this.currentPost.likes = 0;
            if (CKEDITOR) {
                this.currentPost.postDescription = CKEDITOR["instances"]["editor"].getData();    
            }
            this.DataPostFactory.savePost(this.currentPost).then(res => {
                this.$location.path('/posts');
            });
        }
    }

    angular
        .module('demoModule')
        .controller('PostListController', PostListController);
}