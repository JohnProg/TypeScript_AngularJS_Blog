namespace moduleFirstDemo.domain {
    export interface IComment {
        commentId: number;
        postId: number;
        body: string;
        author: string;
        createdOn: Date;
    }
    export class Comment implements IComment {
        constructor(public postId: number,
                    public commentId: number,
                    public body: string,
                    public createdOn: Date,
                    public author: string) {
            
        }
        
    }
}