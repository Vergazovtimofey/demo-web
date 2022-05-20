
import userPhoto from "../../../assets/images/user.png";
import React from 'react';
import styles from './user-helper.module.css'
import User from "../../Users/User/User";


export const updateUsers = (user, followingInProgress, unfollow, follow) => {
    return user.map(u => <User key={u.id} src={u.photos.small != null ? u.photos.small : userPhoto}

                               button={u.followed ? <button className={styles.btn} disabled={followingInProgress
                                   .some(id => id === u.id)} onClick={() => {
                                   unfollow(u.id)

                               }}> UnFollow </button> : <button className={styles.btn} disabled={followingInProgress
                                   .some(id => id === u.id)} onClick={() => {
                                   follow(u.id)
                               }}> Follow </button>}
                               name={u.name}
                               status={u.status} address={'/Profile/' + u.id}
        />
    )
}





/*
{props.users.map(u => <User key={u.id} src={u.photos.small != null ? u.photos.small : userPhoto}

                          button = {u.followed ? <button disabled={props.followingInProgress
                               .some(id => id === u.id)} onClick={() => {
                               props.unfollow(u.id)

                           }}> UnFollow </button> : <button disabled={props.followingInProgress
                               .some(id => id === u.id)} onClick={() => {
                               props.follow(u.id)
                           }}> Follow </button>}
                            name={u.name}
                            status={u.status}
/>)}*/
