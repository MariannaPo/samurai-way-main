import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import state, {StatePropsType} from "../../redux/state";

// type DialogsItemType = {
//     name: string
//     id: number
// }
// type MessagesItemType = {
//     message: string
//     id: number
// }
// export type DialogsPropsType ={
//     dialogs:Array<DialogsItemType>,
//     messages:Array<MessagesItemType>,
//     state: Array<StatePropsType>
// }


const Dialogs = (props: any) => {

    let dialogsElements = props.state.dialogsState.dialogs.map((d: { name: string; id: number; }) => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.state.dialogsState.messages.map((m: { message: string; }) => <Message message={m.message}/>);

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