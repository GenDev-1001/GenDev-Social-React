import React from "react";
import s from './Frends.module.css';
import Frend from "./Frend/Frend";

const Friends = (props) => {

    let state = props.sidebarData;
    let sidebarElements = state.map(item => <Frend key={item.id} name = {item.name} imgUrl = {item.imgUrl} /> )

    return(
        <div >
            <h5>Frends</h5>
            <div className={s.frendsWrapper}>
                { sidebarElements }
            </div>
        </div>
    )
}


export default Friends;