import React from "react";
import sta from "./MyPosts.module.css"
import Post from "./Post";
import {StatePropsType} from "../../../../redux/state";

export type MyPostsPropsType = {
    postsState: StatePropsType['state']['postsState'],

}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.postsState.posts.map(p => <Post id={p.id} message={p.message}
                                                              likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        let text = newPostElement.current?.value;
        alert(text);
    }

    return (
        <div className={sta.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={sta.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;