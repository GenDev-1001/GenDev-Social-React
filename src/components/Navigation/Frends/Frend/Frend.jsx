import React from "react";
import s from './Frend.module.css'

const Frend = (props) => {
    return (
        <div>
            <img className={s.sidebarImg} alt='none' src={props.imgUrl}/>
            <span className={s.sidebarName}>
                {props.name}
            </span>
        </div>
    )
}


export default Frend;