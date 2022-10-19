import React from "react";
import sta from "./MyPosts.module.css"
import Post from "./Post";



const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are u?', likesCount: 0},
        {id: 2, message: `It's my first post`, likesCount: 23},
    ]
    let postsElements = posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);

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