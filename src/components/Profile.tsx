import React from "react";
import s from "./Profile.module.css"


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/414/412/906/moscow-night-city-wallpaper-preview.jpg"
                    alt="profile panorama"/>
            </div>
            <div>
                <div>
                    ava + descriptions
                </div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;