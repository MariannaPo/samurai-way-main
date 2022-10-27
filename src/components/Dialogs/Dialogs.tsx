import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {StatePropsType} from "../../redux/state";

export type DialogsPropsType = {
    state: StatePropsType['state']
}


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogsState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.state.dialogsState.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs;