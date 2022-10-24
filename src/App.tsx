import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs, {DialogsPropsType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import post from "./components/Profile/MyPosts/Posts/Post";
import {MyPostsPropsType} from "./components/Profile/MyPosts/Posts/MyPosts";

export type ProfilePropsType= {
    posts: MyPostsPropsType['posts'],
    messages: DialogsPropsType['messages'],
    dialogs: DialogsPropsType['dialogs'],
}

const App = (props:ProfilePropsType ) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path={"/dialogs"} render={ () => <Dialogs messages={props.messages} dialogs={props.dialogs} />}/>
                    <Route path={"/profile"} render={ () => <Profile posts={props.posts}/>}/>
                    <Route path={'/news'}/>
                    <Route path={"/music"}/>
                    <Route path={"/settings"}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
