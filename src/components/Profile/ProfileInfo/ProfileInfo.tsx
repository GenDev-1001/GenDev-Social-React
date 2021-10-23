import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import usersAva from './../../../assets/images/user.png'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./Status/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";


type PropsType = {
    profile: ProfileType | null,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: File) => void,
    saveProfile: (profile: ProfileType) => Promise<any>,
}


const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType) => {
        //todo: remove then
         saveProfile(formData).then( () => setEditMode(false));


    }

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.photoLong} alt='none'
                     src='https://fartuk.ru/upload/resize_cache/iblock/e96/1920_384_1d2c0be91f8b91a0d3c91a9448f348e3c/skinali_prochie_goroda_14218.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img className={s.userAva} src={profile.photos.large || usersAva} alt='none'/>
                </div>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner}
                                   goToEditMode={() => setEditMode(true)}/>
                } {/*savePhoto={savePhoto} delete with profileData*/}
            </div>
            <div className={s.statusBlock}>
                STATUS: <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div className={s.downloadingPhotos}>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>
        </div>

    )
}


type ProfileDataPropsType = {
    profile: ProfileType,
    isOwner: boolean,
    goToEditMode: () => void,
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {

    return (
        <div>
            {isOwner &&
            <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>
            }
            <div className={s.profileInfo}>
                <p>{profile.fullName}</p>
                <ul className={s.socialList}>
                    <b>Contacts:</b>
                    {Object.keys(profile.contacts).map((key) => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
                    })}
                    <div>
                        <b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    {profile.lookingForAJob &&
                    <div>
                        <b>My professional skills: </b>{profile.lookingForAJobDescription}
                    </div>
                    }
                    <div>
                        <b>About me: </b> {profile.aboutMe}
                    </div>

                    <div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

type ContactsPropsType = {
    contactTitle: string,
    contactValue: string
}

const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <li className={s.socialListItem}>
            {contactTitle}: <a className={s.socialListItemLink} href='#'> {contactValue
            ? contactValue
            : 'none'}
        </a>
        </li>
    )
}

export default ProfileInfo;
