import styles from './User.module.css'
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import React from "react";


const User = (props) => {
    return(
        <div className={styles.container}>
            <NavLink to={props.address}>
                <img className={styles.photo}
                     src ={props.src}
                     alt=""/>
            </NavLink>
            <div className={styles.about}>
                <div className={styles.fullName}> {props.name}</div>
                <div className={styles.city}> city: {props.city!= null ?props.city:'not specified'} </div>
                <div className={styles.country}>country: {props.country!= null ?props.country:'not specified'} </div>
                <div className={styles.status}> {props.status!= null ?props.status:'------'}</div>
            </div>
            <div>{props.button}</div>

        </div>)

}

export default User
