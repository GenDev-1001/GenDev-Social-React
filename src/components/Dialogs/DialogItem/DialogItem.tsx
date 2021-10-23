import React from "react";
import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

type PropsType = {
   id: number,
   name: string
}

const DialogItem: React.FC<PropsType> = (props) => {
    return(
        <div className={s.dialogsItem}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName = {s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem