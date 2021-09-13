import React, { useState } from 'react'
import './Login.scss'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/FirebaseUtils';

const Login = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = event => {
        event.preventDefault();

        setState({ email: '', password: '' });
    };

    const handleChange = event => {

        const { value, name } = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={state.email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={state.password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <div className="buttons">
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogle> Sign in with Google </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default Login
