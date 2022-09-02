import React from "react";
import sta from './Post.module.css'


const Post = () => {
    return (
        <div className={sta.item}>
            <img src='https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg' alt="user_avatar"/>
            post 1
            <div>
                <span>LIKE</span>
            </div>
        </div>
    )
}
export default Post;