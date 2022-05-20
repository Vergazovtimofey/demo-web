import s from "../Dialog.module.css";



const Massage = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )

}
export default Massage