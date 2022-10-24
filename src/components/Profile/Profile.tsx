import React from "react";
import st from "./Profile.module.css"
import MyPosts, {MyPostsPropsType} from "./MyPosts/Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType= {
    posts: MyPostsPropsType['posts']
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;