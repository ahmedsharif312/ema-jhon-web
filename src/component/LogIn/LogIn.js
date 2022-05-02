import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import './LogIn.css'

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nevigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        nevigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }



    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onClick={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                    {
                        loading && <p>Loading..</p>
                    }
                </form>
                <p>
                    New to Ema-jhon? <Link className='form-link' to="/signin">Create New Account</Link>
                </p>
            </div>
        </div>
    );
};

export default LogIn;