import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StatePropsType, updateNewPostText} from "./redux/state";



export type AppPropsType = {
    state: StatePropsType['state'],
    addPost: StatePropsType['addPost'],
    updateNewPostText: StatePropsType['updateNewPostText'],
}

const App = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route path={"/dialogs"} render={() => <Dialogs dialogsState={props.state.dialogsState}/>}/>
                <Route path={"/profile"}
                       render={() => <Profile postsState={props.state.postsState} addPost={props.addPost}
                                              updateNewPostText={updateNewPostText}/>}/>
                <Route path={'/news'}/>
                <Route path={"/music"}/>
                <Route path={"/settings"}/>
            </div>
        </div>
    );
}

export default App;
