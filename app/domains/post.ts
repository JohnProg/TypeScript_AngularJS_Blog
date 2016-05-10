namespace moduleFirstDemo.domain {
    export interface IPost {
        postId: number;
        postName: string;
        postDescription: string;
        publishDate: Date;
        likes: Number;
        author: string;
        imageUrl: string;
    }
    export class Post implements IPost {
        constructor(public postId: number,
                    public postName: string,
                    public postDescription: string,
                    public publishDate: Date,
                    public likes: Number,
                    public author: string,
                    public imageUrl: string){
            
        }
        
    }
}