import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {StatePropsType} from "../../redux/state";

export type DialogsPropsType = {
    dialogsState: StatePropsType['store']['_state']['dialogsState']
}


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.dialogsState.messages.map(m => <Message message={m.message}/>);

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
                {messageElements}
                <div>
                <textarea ref={messageRef}></textarea>
                    <div>
                        <button onClick={newMessage}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;