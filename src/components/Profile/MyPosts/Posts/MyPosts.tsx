import React from "react";
import sta from "./MyPosts.module.css"
import Post from "./Post";
import {StatePropsType} from "../../../../redux/state";
import {text} from "stream/consumers";

export type MyPostsPropsType = {
    postsState: StatePropsType['state']['postsState'],
    addPost: StatePropsType['addPost'],
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.postsState.posts.map(p => <Post id={p.id} message={p.message}
                                                              likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text);
            newPostElement.current.value = ''
        }
    };

    return (
        <div className={sta.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={sta.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;