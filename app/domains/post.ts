namespace moduleFirstDemo.domain {
    export interface IPost {
        postId: number;
        postName: string;
        postDescription: string;
        publishDate: Date;
        likes: number;
        author: string;
        imageUrl: string;
        comments: any[];
    }
    export class Post implements IPost {
        constructor(public postId: number,
                    public postName: string,
                    public postDescription: string,
                    public publishDate: Date,
                    public likes: number,
                    public author: string,
                    public imageUrl: string,
                    public comments: any[]){            
        }
        
    }
}