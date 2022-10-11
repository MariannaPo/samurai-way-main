import React from "react";
import sta from "./MyPosts.module.css"
import Post from "./Post";



const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are u?', likesCount: 0},
        {id: 2, message: `It's my first post`, likesCount: 23},
    ]

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
                <Post id={postData[0].id} message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post id={postData[1].id} message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>

    )
}
export default MyPosts;