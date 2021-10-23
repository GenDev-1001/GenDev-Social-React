import React from "react";
import s from "./Post.module.css";

type PropsType = {

    message: string,
    countLikes: number,
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img alt='none'
                src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP2477-CUSA06694_00-AV00000000000017/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000"/>
            {props.message}
            <div>
                <span>{props.countLikes} likes</span>
            </div>
        </div>
    )
}

export default Post;