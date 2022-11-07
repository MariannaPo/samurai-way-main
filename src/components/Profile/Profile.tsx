import React from "react";
import MyPosts from "./MyPosts/Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StatePropsType} from "../../redux/state";

export type ProfilePropsType = {
    postsState: StatePropsType['store']['_state']['postsState'],
    addPost: StatePropsType['store']['addPost'],
    updateNewPostText: StatePropsType['store']['updateNewPostText'],
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsState={props.postsState}
                     addPost={props.addPost}
                     newPostText={props.postsState.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;