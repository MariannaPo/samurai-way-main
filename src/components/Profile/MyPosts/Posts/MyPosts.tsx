import React from "react";
import sta from "./MyPosts.module.css"
import Post from "./Post";

export type MyPostsPropsType = {
    posts: Array<{
        id: number,
        message: string,
        likesCount:number
    }>
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={sta.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
            </div>
            <div className={sta.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;