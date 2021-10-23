import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddNewPostForm, {AddPostFormValuesType} from "./AddNewPostForm/AddNewPostForm";
import {PostType} from "../../../types/types";


export type MapPropsType = {
    postsData: Array<PostType>
}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {


    let postsElements =
        props.postsData.map(item => <Post key={item.id} message={item.messages} countLikes={item.countLikes}/>)


    let onNewPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


const MyPostsMemorized = React.memo(MyPosts)

export default MyPostsMemorized;