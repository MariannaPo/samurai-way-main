import React from "react";
import sta from "./MyPosts.module.css"
import Post from "./Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={sta.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>

    )
}
export default MyPosts;