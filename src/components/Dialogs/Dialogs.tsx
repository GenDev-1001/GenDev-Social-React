import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {InitialStateType} from "../../redux/dialogs-reducer";
import AddMessageForm from "./DialogItem/AddMessageForm/AddMessageForm";


type PropsType = {
    dialogsPage: InitialStateType
    addMessages: (newMessagesText: string) => void,
}

export type NewMessageFormValuesType = {
    newMessagesText: string,
}

const Dialogs: React.FC<PropsType> = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(item => <DialogItem name={item.name} key={item.id} id={item.id}/>)
    let messagesElements = state.messagesData.map(item => <MessageItem key={item.id} message={item.message}/>)
    let addNewMessage = (values: NewMessageFormValuesType ) => {
        props.addMessages(values.newMessagesText);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}



export default Dialogs;