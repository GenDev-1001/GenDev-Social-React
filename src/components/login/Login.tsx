import React from "react";
import {login} from "../../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../common/FormsControls/FormsControls";
import s from "../common/FormsControls/FormsControls.module.css";


let maxLength = maxLengthCreator(30);
let minLength = minLengthCreator(1);


type LoginFormOwnPropsType = {
    captchaUrl: string | null,
}

type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType>
    = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>('Email', 'email', [required, maxLength, minLength], Input)}
            {createField<LoginFormValuesTypeKeys>('Password', 'password', [required, maxLength, minLength], Input, {type: 'password'})}
            {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl &&
            createField<LoginFormValuesTypeKeys>("Symbols from image", 'captcha', [required], Input, {})
            }

            {(error) && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({form: 'login'})(LoginForm)


type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>



export const LoginPage: React.FC = (props) => {

    const captchaUrl = useSelector((state:AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    const dispatch = useDispatch();

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}




