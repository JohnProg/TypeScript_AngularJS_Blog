namespace moduleFirstDemo {
    'use strict';
    export interface IPostListController{
        title:string;
        showImage:boolean;
        posts:moduleFirstDemo.domain.IPost[];
        toggleImage():void;
        currentPost: Object;
    }
    export class PostListController implements IPostListController{
       static $inject: Array<string> = ['DataPostService','DataPostFactory'];
        //constructor(private dependency1: dependency1Type) {}
        title:string;
        showImage:boolean;
        posts:moduleFirstDemo.domain.IPost[];
        currentPost: Object;
        showProgress:boolean;
        
        constructor(private DataPostService: moduleFirstDemo.common.IDataPostService,
        private DataPostFactory: moduleFirstDemo.IDataPostFactory){
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
    }

    angular
        .module('demoModule')
        .controller('PostListController', PostListController);
}