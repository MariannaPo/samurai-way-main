import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/414/412/906/moscow-night-city-wallpaper-preview.jpg"
                    alt="profile panorama"/>
            </div>
                <div className={s.descriptionBlock}>
                    ava + descriptions
                </div>
        </div>
    )
}

export default ProfileInfo;