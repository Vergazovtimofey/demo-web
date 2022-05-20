import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";



const DialogItem = (props) => {
    return (
        <div >
            <NavLink  to={`./${props.id}`} className={s.dialog}> {props.name} </NavLink>
        </div>
    )

}
export default DialogItem