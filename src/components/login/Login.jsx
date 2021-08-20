import React, {useState} from 'react'
import './Login.scss'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

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

        this.setState({ [name]: value });
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
                <CustomButton type='submit'> Sign in </CustomButton>
            </form>
        </div>
    )
}

export default Login
