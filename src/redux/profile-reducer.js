import {profileAPI, userAPI} from "../api/api";


const ADD_POST = "MUL-network/profile/ADD-POST"
const SET_USER_PROFILE = "UL-network/profile/SET_USER_PROFILE"
const SET_STATUS = "UL-network/profile/SET_STATUS"
const DELETE_POST = "UL-network/profile/DELETE_POST"

let initialState = {
        posts: [
            {id: 1, post: 'hi', likesCount: 21},
            {id: 2, post: 'how are you', likesCount: 5},
            {id: 3, post: 'yo', likesCount: 1},
            {id: 4, post: 'yes', likesCount: 7},
        ],
    profile: null,
    status:''
    }


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = action.newPostText
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    post: newPost,
                    likesCount: 0
                }]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state,
                posts: state.posts.filter(p=> p.id != action.postId)}
        default:
            return state;
    }

}

export const postActionCreator= (newPostText) =>({type: ADD_POST, newPostText})
export const setUserProfile= (profile) =>({type: SET_USER_PROFILE, profile})
export const setStatus = (status) =>({type: SET_STATUS, status})
export const deletePost = (postId) =>({type: DELETE_POST, postId})


export const getProfile = (profileId) => async (dispatch) => {
    let data = await userAPI.profile(profileId)
    dispatch(setUserProfile(data))
}


export const getUserStatus = (profileId) => async (dispatch) => {
    let data = await profileAPI.getStatus(profileId)
    dispatch(setStatus(data))
}

export const updateUserStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}





export default profileReducer


/*export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}*/

