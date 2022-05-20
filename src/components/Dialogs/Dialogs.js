import React from 'react';
import s from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Massage/Massage";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../utils/validator/validator";

let maxlength100 = maxLengthCreator(100)



const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
    let messagesElement = props.dialogsPage.messages.map(m=> <Massage key={m.id} message={m.message}/>)



    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }


  return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.Massages}>
                {messagesElement}
                <AddMessageFormRedux onSubmit={addNewMessage}/>

            </div>
        </div>
  )
}


const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessageText"
                       component={Textarea}
                       placeholder="введи сообщение"
                       validate={[required, maxlength100]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)
  


export default Dialogs