import React from "react";
import sta from "./MyPosts.module.css"
import Post from "./Post";


const MyPosts = () => {
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
                <Post message='Hi, how are u?' likesCount='0'/>
                <Post message={`It's my first post`} likesCount='23'/>
            </div>
        </div>

    )
}
export default MyPosts;