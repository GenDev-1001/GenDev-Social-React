import React from "react";
import s from "../ProfileInfo.module.css";
import {createField, GetStringKeys, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../../types/types";


type PropsType = {
    profile: ProfileType,
}

type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType>& PropsType> = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {(error) && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div className={s.descriptionBlock}>
                <div className={s.profileInfo}>
                    <b>Full name:</b> {createField<ProfileTypeKeys>('full name', 'fullName', [], Input)}
                    <ul className={s.socialList}>
                        <div>
                            <b>Looking for a job: </b>
                            {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
                        </div>
                        <div>
                            <b>My professional skills: </b>
                            {createField<ProfileTypeKeys>('My professional skills...', 'lookingForAJobDescription', [], Textarea)}
                        </div>
                        <div>
                            <b>About me: </b>
                            {createField<ProfileTypeKeys>('About me...', 'aboutMe', [], Textarea)}
                        </div>
                        <div>
                            <b>Contacts:</b>
                            {Object.keys(profile.contacts).map(key => {
                                return <div key={key} className={s.socialListItem}>
                                    {/*todo: create some solution for embedded objects */}
                                    <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                                </div>

                            })}
                        </div>
                    </ul>
                </div>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm);


export default ProfileDataFormReduxForm;