import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
                    alt="logo"/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>

            </nav>
            <div className="content">
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
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
