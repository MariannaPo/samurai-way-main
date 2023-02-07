import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StatePropsType, store} from "./redux/state";



export type AppPropsType = {
    state: StatePropsType['store']['_state'],
    store: StatePropsType['store'],
    // addPost: StatePropsType['store']['addPost'],
    // updateNewPostText: StatePropsType['store']['updateNewPostText'],
    dispatch: StatePropsType['store']['dispatch'],
}

const App = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route path={"/dialogs"} render={() => <Dialogs store={store} dialogsState={props.state.dialogsState}/>}/>
                <Route path={"/profile"} render={() => <Profile postsState={props.state.postsState} dispatch={props.dispatch}/>}/>
                <Route path={'/news'}/>
                <Route path={"/music"}/>
                <Route path={"/settings"}/>
            </div>
        </div>
    );
}

export default App;
