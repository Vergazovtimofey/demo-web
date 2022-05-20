import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/user-reducer";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/user-selectors";
import {useLocation, useParams} from "react-router-dom";




const UsersContainerHooks =(props)=> {


    const onPagechanged = (pageNumber) => {
        props.requestUsers(pageNumber, props.pageSize);
    }

    useEffect(()=>{
        props.requestUsers(props.currentPage,props.pageSize)
        onPagechanged(props.currentPage,props.pageSize)
    },[props.currentPage])



        return (<>
                {props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPagechanged={onPagechanged}
                       users={props.users}
                       unfollow={props.unfollow}
                       follow={props.follow}
                       followingInProgress={props.followingInProgress}
                />
                </>)
    }



let mapStateToProps= (state)=>{
    return{
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }

}


export default compose(

    connect(mapStateToProps,{
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,requestUsers}
))(UsersContainerHooks)

