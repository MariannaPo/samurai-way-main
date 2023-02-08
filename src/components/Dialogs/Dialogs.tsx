import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, StatePropsType, updateNewMessage} from "../../redux/state";
import store from "../../redux/state";

export type DialogsPropsType = {
    dialogsState: StatePropsType['store']['_state']['dialogsState']
    store: StatePropsType['store']
}


const Dialogs = (props: DialogsPropsType) => {

    // let state = props.store.getState().dialogsState

    let dialogsElements = props.dialogsState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.dialogsState.messages.map(m => <Message message={m.message}/>);
    let newMessageText = props.dialogsState.newMessageText

    // let messageRef = React.createRef<HTMLTextAreaElement>();
    // let newMessage = () => {
    //     let newMes = messageRef.current?.value;
    //     alert(newMes);
    // }
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessage(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                <textarea placeholder={'Enter your message'} onChange={onNewMessageChange} value={newMessageText}></textarea>
                    <div>
                        <button onClick={onSendMessageClick}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;