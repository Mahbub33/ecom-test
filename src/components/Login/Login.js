import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();
      const location = useLocation()
      const from = location.state?.from?.pathname || '/'

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    console.log(email, password)

    if(user) {
        navigate(from, {replace:true})
    }

    const handleUserSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }



    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' id='a125' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur}  type="password" name='password' id='a135' required/>
                    </div>
                    <div className="input-group">
                        <p style={{color:'red'}}>{error?.message}</p>
                        {
                            loading && <p>Loading...</p>
                        }
                        <input className='form-submit' type="submit" value="Login" required/>
                    </div>
                </form>
                <p >New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link></p>
                <div className='login-divider'>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <div className="input-group">
{/* ??? */}         <input className='form-submit' type="submit" value="Continue with Google" />
                </div>
            </div>
        </div>
    );
};

export default Login;