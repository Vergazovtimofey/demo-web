import {userAPI} from "../api/api";
import {updateObjectInArray} from "../components/utils/object-helpers/object-helpers";

const FOllOW = "MUL-network/user/FOllOW"
const UNFOllOW = "MUL-network/user/UNFOllOW"
const SET_USERS = "MUL-network/user/SET-USERS"
const SET_CURRENT_PAGE = 'MUL-network/user/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT ='MUL-network/user/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING ='MUL-network/user/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS ='MUL-network/user/TOGGLE_IS_FOLLOWING_PROGRESS'



let initialState = {
   users: [ ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOllOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,'id', {followed: true})
               /* users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })*/
            };
        case UNFOllOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,'id', {followed: false})
               /* users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })*/
            };
        case SET_USERS:
            return {...state, users: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state;
    }

}

export const followSuccess = (userId) =>({type: FOllOW, userId})
export const unfollowSuccess = (userId) =>({type: UNFOllOW, userId})
export const setUsers = (users) =>({type: SET_USERS, users})
export const setCurrentPage = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) =>({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) =>({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress= (isFetching,userId) =>({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching,userId})



export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setUsersTotalCount(data.totalCount))
    dispatch(setCurrentPage(currentPage))
}



const followUnfollowFlow = async (dispatch, userId, apiMethod,actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}


export const follow = (userId) => async (dispatch) => {
     followUnfollowFlow(dispatch, userId, userAPI.followUser.bind(userAPI),followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
     followUnfollowFlow(dispatch, userId, userAPI.unFollowUser.bind(userAPI),unfollowSuccess)
}








export default usersReducer



/*
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        userAPI.unFollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            });

    }
}*/
