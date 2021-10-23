import {maxLengthCreator, minLengthCreator, required} from "../../../../utils/validators/validators";
import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../../../common/FormsControls/FormsControls";
import {NewMessageFormValuesType} from "../../Dialogs";

let maxLength = maxLengthCreator(10);
let minLength = minLengthCreator(2);

type NewMessageFormValuesKeysType = Extract <keyof NewMessageFormValuesType, string>;
type PropsType = {}

const AddMessageForm:React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormValuesKeysType>('new messages', 'newMessagesText', [required, minLength, maxLength],Textarea)}

    </div>
    <div>
    <button>send</button>
    </div>
    </form>
)
}

export default reduxForm<NewMessageFormValuesType>({form: 'dialogAddMessageForm'})(AddMessageForm);