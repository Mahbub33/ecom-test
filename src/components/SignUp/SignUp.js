import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    console.log(password, '(', confirmPassword,')')

    if(user) {
        navigate ('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault()
        if(password !== confirmPassword) {
            setError('Confirm password does not match')
            return;
        }
        if(password.length < 6) {
            setError('Password must be 6 characters or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' id='a123' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' id='a124' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name='password' id='a126' required/>
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <div className="input-group">
                        <input className='form-submit' type="submit" value="Sign up" />
                    </div>
                </form>
                <p>Already have an account? <Link className='form-link' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;