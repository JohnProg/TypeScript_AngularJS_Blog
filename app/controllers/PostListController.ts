namespace moduleFirstDemo {
    'use strict';
    export interface IPostListController{
        title:string;
        showImage:boolean;
        posts:moduleFirstDemo.domain.IPost[];
        toggleImage():void;
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
            this.showImage=false;
            this.posts=[];
            this.showProgress=true;
            setTimeout(()=> {
                this.DataPostFactory.getPosts().then(
                res=>{
                    this.posts=res;
                    this.showProgress=false;
                }
            );
            }, 2000);
        }
        toggleImage():void{
            this.showImage=!this.showImage;
        }
        savePost(): void {
            
            this.DataPostFactory.savePost(this.currentPost).then(res => {
                console.log('GRABE CHORRI');
                console.log(res);
                
                this.$location.path('/posts');
            });
        }
    }

    angular
        .module('demoModule')
        .controller('PostListController', PostListController);
}