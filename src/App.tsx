import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StatePropsType} from "./redux/state";


export type ProfilePropsType= {
    state: StatePropsType['state'],
}

const App = (props: ProfilePropsType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path={"/dialogs"} render={ () => <Dialogs dialogsState={props.state.dialogsState}/>}/>
                    <Route path={"/profile"} render={ () => <Profile postsState={props.state.postsState}/>}/>
                    <Route path={'/news'}/>
                    <Route path={"/music"}/>
                    <Route path={"/settings"}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
