import React from "react";
import s from './MessageItem.module.css'

type PropsType = {
    message: string
}

const MessageItem: React.FC<PropsType> = (props) => {
    return(
        <div className={s.messageItem}>{props.message}</div>
    )
}

export default MessageItem