import profileReducer, {actions} from "./profile-reducer";
import {PostType, ProfileType} from "../types/types";
import React from "react";

let state = {
    postsData: [
        {id: 1, messages: 'Hi, how are you?', countLikes: '4'},
        {id: 2, messages: 'It\'s my first post', countLikes: '3'},
        {id: 3, messages: 'It\'s my seconds post', countLikes: '1'},
        {id: 4, messages: 'blablabla', countLikes: '2'},
    ],
    profile: null,
    status: '',
    newPostText: '',
};

it("length of posts should be incremented", () => {
    let action = actions.addPost('Gendev');
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(5);
});

it("message of new post should be correct", () => {
    let action = actions.addPost('Gendev');
    let newState = profileReducer(state, action)
    expect(newState.postsData[4].messages).toBe('Gendev');
});


it("after deleting of messages should be decrement", () => {
    let action = actions.deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3);
});
