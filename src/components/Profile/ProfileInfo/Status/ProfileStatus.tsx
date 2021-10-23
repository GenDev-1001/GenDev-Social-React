import React, {ChangeEvent} from "react";
import s from './ProfileStatus.module.css'

type PropsType = {
    status: string,
    updateStatus: (newStatus: string) => void,

}

type StateType ={
    editMode: boolean,
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })

    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status){
        this.setState({
            status: this.props.status
        })
        }
    }

    render() {
        return (
            <span className={s.status}>
                {!this.state.editMode &&
                    <span onDoubleClick={this.activateEditMode }>{this.props.status || '------'} </span>
                }
                {this.state.editMode &&
                    <input onChange={this.onStatusChange}
                           autoFocus={true}
                           onBlur={this.deactivateEditMode }
                           value={this.state.status}/>
                }
        </span>
        )
    }
}

export default ProfileStatus;