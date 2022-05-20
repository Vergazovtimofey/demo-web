import s from './Navbar.module.css';
import {Link, NavLink} from "react-router-dom";


const Navbar = () => {
    return(
        <nav className={s.nav}>
            <div className={s.items}>
            <div >
                <NavLink className={({isActive})=> isActive ? s.active : s.item } to="/profile">Profile</NavLink>
            </div>
            <div >
                <NavLink className={({isActive})=> isActive ? s.active : s.item} to="/dialogs">Messages</NavLink>
            </div>
            <div >
                <NavLink className={({isActive})=> isActive ? s.active : s.item} to="/news">News</NavLink>
            </div>
            <div >
                <NavLink className={({isActive})=> isActive ? s.active : s.item} to="/music">Music</NavLink>
            </div>
            <div >
                <NavLink className={({isActive})=> isActive ? s.active : s.item} to="/settings">Settings</NavLink>
            </div>
            <div >
                <NavLink className={({isActive})=> isActive ? s.active : s.item} to="/users">Users</NavLink>
            </div>
            </div>
        </nav>
    )

}
export default Navbar