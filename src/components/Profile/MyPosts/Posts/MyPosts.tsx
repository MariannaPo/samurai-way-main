import React from "react";
import sta from "./MyPosts.module.css"
import Post from "./Post";
import {StatePropsType} from "../../../../redux/state";

export type MyPostsPropsType = {
    state: StatePropsType['state'],

}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.state.postsState.posts.map(p => <Post id={p.id} message={p.message}
                                                                    likesCount={p.likesCount}/>);

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