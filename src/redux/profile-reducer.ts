import {PhotosType, PostType, ProfileType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {profileAPI} from "../api/profile-api";
import {FormAction, stopSubmit} from "redux-form";


let initialState = {
    postsData: [
        {id: 1, messages: 'Hi, how are you?', countLikes: 4},
        {id: 2, messages: 'It\'s my first post', countLikes: 3},
        {id: 3, messages: 'It\'s my seconds post', countLikes: 1},
        {id: 4, messages: 'blablabla', countLikes: 2},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
};

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD-POST':
            let newPost = {
                id: 5,
                messages: action.newPostText,
                countLikes: 0,
            }
            return ({
                ...state,
                postsData: [...state.postsData, newPost],
            })
        case 'SN/PROFILE/SET_USERS_PROFILE':
            return ({
                ...state, profile: action.profile
            })
        case 'SN/PROFILE/SET_STATUS':
            return ({
                ...state,
                status: action.status
            })
        case 'SN/PROFILE/DELETE_POST':
            return ({
                ...state,
                postsData: state.postsData.filter(item => item.id !== action.postId)
            })
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
            return ({
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            })
        default:
            return state;
    }
}

export const actions = {

    addPost: (newPostText: string) => {
        return {
            type: 'SN/PROFILE/ADD-POST',
            newPostText,
        } as const
    },

    deletePost: (postId: number) => {
        return {
            type: 'SN/PROFILE/DELETE_POST',
            postId,
        } as const
    },

    setUserProfile: (profile: ProfileType) => {
        return {
            type: 'SN/PROFILE/SET_USERS_PROFILE',
            profile
        } as const
    },


    setStatus: (status: string) => {
        return {
            type: 'SN/PROFILE/SET_STATUS',
            status,
        } as const
    },


    savePhotoSuccess: (photos: PhotosType) => {
        return {
            type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS',
            photos,
        } as const
    },
}



export const getUserProfile = (userId: number): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.getProfile(userId)
        dispatch(actions.setUserProfile(data));
    }
}

export const getStatus = (userId: number): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.getStatus(userId)
        dispatch(actions.setStatus(data))
    }
}

export const updateStatus = (status: string): ThunkType => {
    return async (dispatch) => {
        try {
            const data = await profileAPI.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(actions.setStatus(status))
            }
        } catch (error) {
            //
        }
    }
}

export const savePhoto = (file: File): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.savePhoto(file);
        if (data.resultCode === 0) {
            dispatch(actions.savePhotoSuccess(data.data.photos))
        }
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const data = await profileAPI.saveProfile(profile);
        if (data.resultCode === 0) {
            if(userId !== null) {
                dispatch(getUserProfile(userId))
            }else {
                throw new Error('userId can\'t be null')
            }
        } else {
            dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}))
            return Promise.reject(data.messages[0]);
        }
    }
}


export default profileReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>