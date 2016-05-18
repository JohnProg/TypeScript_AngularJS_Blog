namespace moduleFirstDemo {
    'use strict';
    export interface IPostListController{
        title:string;
        showImage:boolean;
        posts:moduleFirstDemo.domain.IPost[];
        currentPost: moduleFirstDemo.domain.IPost;
        savePost():void;
        deletePost(index: number):void;
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
            this.currentPost.tags = ["js", "html", "ionic"];
            if (tinyMCE) {
                this.currentPost.postDescription = tinyMCE.activeEditor.getContent();
            }
            this.DataPostFactory.savePost(this.currentPost).then(res => {
                this.$location.path('/posts');
            });
        }
        deletePost(index: number): void {
            console.log('WTF ' + index);
            var id = this.posts[index]['id'];
            console.log('ID',this.posts);
            
            this.DataPostFactory.deletePost(id).then(res => {
               this.posts.splice(index, 1); 
            });
        }
    }

    angular
        .module('demoModule')
        .controller('PostListController', PostListController);
}