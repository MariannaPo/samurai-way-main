import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    name: string
    id: number
}

const DialogItem = (props: DialogsItemType) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

type MessageType = {
    message: string
}
const Message = (props: MessageType) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props: DialogsItemType) => {

    let dialogsData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"},
    ]

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: `How is your it-kamasutra?`},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Buy"},
        {id: 6, message: "What?"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
                <Message message={messageData[5].message}/>
            </div>
        </div>
    )
}
export default Dialogs;