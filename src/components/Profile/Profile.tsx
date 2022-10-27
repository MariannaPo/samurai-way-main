import React from "react";
import st from "./Profile.module.css"
import MyPosts from "./MyPosts/Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StatePropsType} from "../../redux/state";

export type ProfilePropsType = {
    postsState: StatePropsType['state']['postsState']
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsState={props.postsState}/>
        </div>
    )
}

export default Profile;