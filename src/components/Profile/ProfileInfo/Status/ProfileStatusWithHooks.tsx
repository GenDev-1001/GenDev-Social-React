import React, {ChangeEvent, useEffect, useState} from "react";
import s from "./ProfileStatus.module.css";

type PropsType = {
    status: string,
    updateStatus: (status:string) => void,
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <span className={s.status}>
                {!editMode &&
                <span
                    onDoubleClick={activateEditMode}
                >{props.status || '------'} </span>
                }
            {editMode &&
            <input
                onBlur={deactivateEditMode}
                onChange={onStatusChange}
                autoFocus={true}
                value={status}
            />
            }
        </span>
    )
}


export default ProfileStatusWithHooks;