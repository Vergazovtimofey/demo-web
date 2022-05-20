import React from 'react'
import styles from './../common/FormsControl/FormsControl.module.css'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {required} from "../utils/validator/validator";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', Input, required)}
            {createField('password', 'password', Input, required, 'password')}
            {createField(null, 'rememberMe', Input, null, 'checkbox', null, 'remember me')}

            {error ? <div className={styles.formSammeryError}>
                {error}
            </div> : ''}
            <div>
                <button>Login</button>
            </div>


        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)



const Login = (props) => {
    const onSubmit = (formData) => {
     props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth){
        return <Navigate to={'/profile'}/>
    }

    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>)

}

const mapStateToProps = (state)=>{
    return{
        isAuth: state.auth.isAuth
    }
}




export default connect(mapStateToProps,{login, logout})(Login)