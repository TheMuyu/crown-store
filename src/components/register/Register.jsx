import React, {useState} from 'react'
import './Register.scss'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDoc } from '../../firebase/FirebaseUtils';

const Register = () => {
    const [user, setUser] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleSubmit = async event => {
        event.preventDefault();
        console.log(user);
        const { displayName, email, password, confirmPassword } = user;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUserProfileDoc(user, { displayName });
    
          setUser({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
        } catch (error) {
          console.error(error);
        }
      };
    const handleChange = event => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
      };
    const { displayName, email, password, confirmPassword } = user;
    return (
        <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
}

export default Register
