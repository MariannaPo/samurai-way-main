import React from "react";
import sta from "./MyPosts.module.css"
import Post from "./Post";
import state, {StatePropsType} from "../../../../redux/state";

// export type MyPostsPropsType = {
//     // posts: Array<{
//     //     id: number,
//     //     message: string,
//     //     likesCount:number
//     // }>,
//     state: Array<StatePropsType>,
//
// }

const MyPosts = (props: any) => {

    let postsElements = props.state.postsState.posts.map( (p: { id: any; message: any; likesCount: any; }) => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);

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