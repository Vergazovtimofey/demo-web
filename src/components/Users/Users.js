import  React, {useState} from 'react'
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import s from "../Dialogs/DialogItem/DialogItem.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import {updateUsers} from "../utils/users-helper/user-helper";






const Users = ({totalUsersCount, pageSize, onPagechanged, currentPage, ...props}) => {

    return (<div>
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPagechanged={onPagechanged}/>

            {updateUsers(props.users,props.followingInProgress,props.unfollow,props.follow)}



        </div>

    )

}
export default Users

