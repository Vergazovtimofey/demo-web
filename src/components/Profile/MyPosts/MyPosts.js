import React, {useMemo} from 'react';
import s from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validator/validator";
import {Textarea} from "../../common/FormsControl/FormsControl";

const maxlength10= maxLengthCreator(10)

const MyPosts =React.memo(props => {


     let postElement = props.posts.map(p => <Post massage={p.post} key={p.id} likesCount={p.likesCount}/>)

    let addNewPost =(value)=>{
        props.addPost(value.newPostText)
    }

    return(
        <div className={s.posts}>
            <h3>My Posts</h3>
            <div>
                <PostReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
});



const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={'post message'} validate={[required, maxlength10]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )

}

const PostReduxForm = reduxForm({ form: 'postsAddPostForm'})(PostForm)


export default MyPosts