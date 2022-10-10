import React from "react";
import st from "./Profile.module.css"
import MyPosts from "./MyPosts/Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;