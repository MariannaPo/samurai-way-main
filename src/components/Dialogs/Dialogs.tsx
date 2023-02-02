import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {StatePropsType, updateNewMessageBodyCreator} from "../../redux/state";

export type DialogsPropsType = {
    dialogsState: StatePropsType['store']['_state']['dialogsState']
}


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.dialogsState.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.dialogsState.newMessageBody;


    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dialogsState.dispatch(updateNewMessageBodyCreator(body))
    };
    let messageRef = React.createRef<HTMLTextAreaElement>();
    let newMessage = () => {
        let newMes = messageRef.current?.value;
        alert(newMes);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   ref={messageRef} placeholder={'Enteryour message'}></textarea></div>
                    <div>
                        <button onClick={newMessage}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;