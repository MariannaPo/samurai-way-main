import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import post from "./components/Profile/MyPosts/Posts/Post";
import state, {StatePropsType} from "./redux/state";

// export type ProfilePropsType= {
//     // posts: MyPostsPropsType['posts'],
//     // messages: DialogsPropsType['messages'],
//     // dialogs: DialogsPropsType['dialogs'],
//     state: Array<StatePropsType>,
//
// }

const App = (props:any) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path={"/dialogs"} render={ () => <Dialogs state={props.state}/>}/>
                    <Route path={"/profile"} render={ () => <Profile state={props.state}/>}/>
                    <Route path={'/news'}/>
                    <Route path={"/music"}/>
                    <Route path={"/settings"}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
