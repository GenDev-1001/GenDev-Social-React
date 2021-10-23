import React from "react";
import s from './Preloader.module.css'
import preloader from "../../../assets/images/Wedges-3s-200px.svg";


const Preloader: React.FC = () => {
    return(
        <div className={s.preloader}>
            <img src={preloader} alt="none"/>
        </div>
    )
}

export default Preloader;