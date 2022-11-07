import React from "react";
import sta from "./MyPosts.module.css"
import Post from "./Post";
import {StatePropsType} from "../../../../redux/state";


export type MyPostsPropsType = {
    newPostText: string;
    postsState: StatePropsType['state']['postsState'],
    addPost: StatePropsType['addPost'],
    updateNewPostText: StatePropsType['updateNewPostText'],
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.postsState.posts.map(p => <Post id={p.id} message={p.message}
                                                              likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text);
            props.updateNewPostText ('');
        }
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);
        }
    }

    return (
        <div className={sta.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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