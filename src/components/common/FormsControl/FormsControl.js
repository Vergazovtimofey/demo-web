import React from 'react'
import styles from './FormsControl.module.css'
import {required} from "../../utils/validator/validator";
import {Field} from "redux-form";


const FormControl = ({input, meta: {touched,error}, ...props}) =>{
    const hasError = touched && error
    return(
        <div className={styles.formControl +' '+ (hasError ? styles.error: "")}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )


}


export const Textarea = (props)=>{
    const{input, meta, child, ...restProps} = props
    return(
        <FormControl {...props}><textarea {...props.input} {...restProps}/></FormControl>
    )
}

export const Input = (props)=>{
    const{input, meta, child, ...restProps} = props
    return(
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}

export const createField =(placeholder,name, component,validators, type = null, props=null, text=null)=>{
    return (<div>
        <Field name={name} placeholder={placeholder}
                  component={component}
                  validate={validators}
               type={type}
            {...props}/> {text}
    </div>)
}