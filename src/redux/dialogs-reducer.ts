import {InferActionsTypes} from "./redux-store";


type DialogsDataType = {
    id: number,
    name: string,
}

type MessagesDataType = {
    id: number,
    message: string,
}

let initialState =  {
    dialogsData:[
        {id: 1, name: 'Gennadiy'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Roma'}
    ] as Array<DialogsDataType>,

    messagesData:[
        { id: 1, message: 'Hi'},
        { id: 2, message: 'How are your Gendev'},
        { id: 3, message: 'Yo'},
        { id: 4, message: 'Yo'},
        { id: 5, message: 'Yo'},
    ] as Array<MessagesDataType>,
}




const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/ADD-MESSAGES':
            let newMessages = {
                id: 6,
                message: action.newMessagesText,
            }
            return ({
                ...state,
                messagesData: [...state.messagesData, newMessages],
            });
        default:
            return state;
    }
}

export const actions = {

    addMessages: (newMessagesText: string) => {
        return {
            type: 'SN/DIALOGS/ADD-MESSAGES',
            newMessagesText,
        } as const
    },
}





export default dialogsReducer;


export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>