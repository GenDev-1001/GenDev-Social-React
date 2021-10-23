import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Textarea,} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);
const minLength2 = minLengthCreator(3);

type PropsType = {

}

export type  AddPostFormValuesType = {
    newPostText: string,
}
type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

let AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType>& PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField<AddPostFormValuesTypeKeys>('new post...', 'newPostText', [required, maxLength10, minLength2], Textarea)}
            <button>Add post</button>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType, PropsType>({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)
