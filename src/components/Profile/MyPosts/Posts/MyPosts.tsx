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
                <Post message='Hi, hor are u?' likesCount='0'/>
                <Post message={`It's my first post`} likesCount='23'/>
            </div>
        </div>

    )
}
export default MyPosts;