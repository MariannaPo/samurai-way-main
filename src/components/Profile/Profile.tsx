import React from "react";
import st from "./Profile.module.css"
import MyPosts from "./MyPosts/Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StatePropsType} from "../../redux/state";

export type ProfilePropsType = {
    state: StatePropsType['state']
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}/>
        </div>
    )
}

export default Profile;