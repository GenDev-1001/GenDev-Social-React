import React from "react";
import s from './Users.module.css';
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";

type PropsType = {
    user: UserType,
    followingInProgress: Array<number>,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
}


const User: React.FC<PropsType> = ({user, followingInProgress, unfollow, follow, ...props}) => {
    let userItem = user;

    return (<div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + userItem.id}>
                            <img src={userItem.photos.small !== null ? userItem.photos.small : userPhoto} className={s.photo}
                                 alt='none'/>
                        </NavLink>
                    </div>
                    <div>
                        {userItem.followed ?
                            <button disabled={followingInProgress.some(id => id === userItem.id)} onClick={() => {
                                unfollow(userItem.id)
                            }}>Unfollow</button> :
                            <button disabled={followingInProgress.some(id => id === userItem.id)} onClick={() => {
                                follow(userItem.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{userItem.name}</div>
                        <div>{userItem.status}</div>
                    </span>
                    <span>
                        <div>{"userItem.location.country"}</div>
                        <div>{"userItem.location.city"}</div>
                    </span>
                </span>
            </div>)
}

export default User;