import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login=()=>{

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!email || !password){
            setErrorMessage("please fill all fields");
            return;
        }
        setErrorMessage('');
        const userData = {email,password}

        navigate('/')

        console.log('Logging in with:',userData);


    }
    return(
        <div className="login-form">
            <h2>Login</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;