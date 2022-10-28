import React from "react";
import MyPosts from "./MyPosts/Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StatePropsType} from "../../redux/state";

export type ProfilePropsType = {
    postsState: StatePropsType['state']['postsState'],
    addPost: StatePropsType['addPost'],
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsState={props.postsState} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;