import React, {useMemo} from 'react';
import {postActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";





let mapStateToProps = (state)=>{

    return{
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        addPost: (newPostText)=>{
            dispatch(postActionCreator(newPostText))
        }
    }
}



const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)



export default MyPostsContainer