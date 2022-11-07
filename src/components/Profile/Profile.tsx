import React from "react";
import MyPosts from "./MyPosts/Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StatePropsType} from "../../redux/state";

export type ProfilePropsType = {
    postsState: StatePropsType['store']['_state']['postsState'],
    // addPost: StatePropsType['store']['addPost'],
    // updateNewPostText: StatePropsType['store']['updateNewPostText'],
    dispatch: StatePropsType['store']['dispatch'],
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsState={props.postsState}
                     dispatch={props.dispatch}
                     newPostText={props.postsState.newPostText}/>
        </div>
    )
}

export default Profile;