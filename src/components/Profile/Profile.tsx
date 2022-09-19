import React from "react";
import st from "./Profile.module.css"
import MyPosts from "./MyPosts/Posts/MyPosts";


const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/414/412/906/moscow-night-city-wallpaper-preview.jpg"
                    alt="profile panorama"/>
            </div>
            <div>
                <div>
                    ava + descriptions
                </div>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;