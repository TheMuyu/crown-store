import React from 'react'
import Login from '../../components/login/Login'
import Register from '../../components/register/Register'
import './LoginRegister.scss'

const LoginRegister = () => {
    return (
        <div className="sign-in-and-sign-up">
            <Login />
            <Register />
        </div>
    )
}

export default LoginRegister
