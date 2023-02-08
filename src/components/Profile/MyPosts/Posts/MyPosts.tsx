import React from "react";
import sta from "./MyPosts.module.css"
import Post from "./Post";
import {StatePropsType} from "../../../../redux/state";


export type MyPostsPropsType = {
    newPostText: string;
    postsState: StatePropsType['store']['_state']['postsState'],
    // addPost: StatePropsType['store']['addPost'],
    // updateNewPostText: StatePropsType['store']['updateNewPostText'],
    dispatch: StatePropsType['store']['dispatch'],
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.postsState.posts.map(p => <Post id={p.id} message={p.message}
                                                              likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.dispatch({type: "ADD-POST"});
        }
    }
    let onPostChange = () => {
        // console.log(newPostElement.current?.value)
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            let action = {type:'UPDATE-NEW-POST-TEXT', newText: text};
            props.dispatch(action);
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