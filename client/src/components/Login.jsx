import { Form, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Login = () => {
    const navigate = useNavigate(); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const uri = "http://localhost:5000/auth/login";
        try {
            const reqJSON = {"username": username, "password": password};
            fetch(uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqJSON)
            }).then((res) => {
                return res.json();
            }).then((res) => {
                if (res.status != 200) {
                    const err = document.querySelector('#err-msg');
                    err.innerHTML = "Incorrect Username or Password";
                } else {
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('username', res.username);
                    navigate("/CountrySelect");
                }
            })
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='login-container p-5' style={{borderRadius: "20px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", minWidth:"500px", minHeight:"300px"}}>
                <h1> Login </h1>
                    {/* Input forms  */}
                <div class="text-start">
                    {/* Username */}
                    <Form.Label>Enter Username</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control 
                            className='login-input-box'
                            type = "text"
                            value = {username}
                            onChange = {handleUsernameChange}
                            placeholder="Username"
                        />
                    </InputGroup>
                    {/* Password */}
                    <Form.Label>Enter Password</Form.Label>
                    <InputGroup>
                        <Form.Control
                        className='login-input-box'
                            type = "password"
                            value = {password}
                            onChange = {handlePasswordChange}
                            placeholder="Password"
                        />
                    </InputGroup>
                    <Button variant="link" style={{ color:"#E7FFD3"}} onClick={() => navigate("/Signup")}> Don't have an account? </Button>        
                </div>
                <div className='d-flex flex-column align-items-center relative'>
                    <p id='err-msg' className='absolute text-red-500 text-xs left-[50%] -translate-x-1/2'></p>
                    <button class="login-submit-btn mt-5" onClick={handleSubmit} type="submit">Submit</button>
                    <Button variant="link" style={{ color:"#E7FFD3"}} onClick={() => navigate("/")}>Back to Home </Button>    
                </div>
            </div>
        </form>
        
    );
};
export default Login;