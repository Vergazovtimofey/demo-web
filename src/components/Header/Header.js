import headS from './Header.module.css';
import {NavLink} from "react-router-dom";



const Header =(props)=>{
    return(
        <header className={headS.header}>
            <img className={headS.profileImg} src="https://i.pinimg.com/736x/62/92/07/62920797c4989931f4222526df8ba432.jpg" alt=""/>

            <div className={headS.loginBlock}>
                {props.isAuth ? <div> {props.login}- <button onClick={props.logout}>Logout</button></div>:
                <NavLink className={headS.loginBlock} to={'/login'}> Login </NavLink>}
            </div>


        </header>
    )
}

export default Header